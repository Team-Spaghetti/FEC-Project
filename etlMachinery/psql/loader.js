// one function will load data into a new table
const fs = require('fs');
const fastcsv = require('fast-csv');
const path = require('path');
const Pool = require('pg').Pool;
const psqlConnection = require('./config');
const queryInfo = require('./queryInfo');
const url = require('url');

const pool = new Pool(psqlConnection);

const simpleLoader = (tableName, table2) => {

  const filePath = path.join(__dirname, `../../productCSV/${tableName}.csv`); //error if tablename doesn't match csv name. the path is the path from the absolute path + path to csv file from here. if this loader file/csvfolder is moved, must be updated

  const query = `insert into ${tableName} (${queryInfo[tableName].join(', ')}) values (${Array.from({ length: queryInfo[tableName].length + 1 }, (e, i) => `\$${i}`).slice(1).join(', ')})`;

  const updateQuery = table2 ? `update ${table2} set ${tableName} = array_append(${tableName}, $1) where id = $2` : '';

  const data = [];
  const fileStream = fs.createReadStream(filePath);

  const csvStream = fastcsv
    .parse()
    .on('data', newData => data.push(newData))
    .on('end', () => {
      pool.connect((err, client, done) => {
        if (err) throw err;
        console.log('connected');
        //if tableName is related products, you're just updating the products table and not creating a new table
        try {
          if (tableName === 'relatedproducts') {
            if (updateQuery) {
              data.forEach((datum, i) => {
                let sanitizer = [`${datum[2]}`, `${datum[1]}`];
                client.query(updateQuery, sanitizer)
                  //note that if the query is sent and no product of the matching id is found, it's still counted as a success so the then step will be invoked
                  .then(res => console.log(`Updated ${i + 1} items!`))
                  .catch(err => console.error(err.stack))
              })
            }
          } else {
            data.forEach((crude, i) => {
              let datum = crude.map(crudely => crudely === 'null' ? null : crudely);
              client.query(query, datum)
                .then(res => {
                  console.log(`Inserted ${i + 1} items!`);
                  if (updateQuery) {
                    let sanitizer = [`${datum[0]}`, `${datum[1]}`];
                    client.query(updateQuery, sanitizer)
                      //note that if the query is sent and no product of the matching id is found, it's still counted as a success so the then step will be invoked
                      .then(res => console.log(`Updated ${i + 1} items!`))
                      .catch(err => console.error(err.stack))
                  }
                })
                .catch(err => console.error(err.stack));
            })
          }
        } finally { done(); }
      })
    });

  fileStream.pipe(csvStream);
}

// sequence of etl
// simpleLoader('products');
// simpleLoader('features', 'products');
// simpleLoader('styles', 'products');
// simpleLoader('skus', 'styles');
// simpleLoader('photos', 'styles');
// simpleLoader('relatedproducts', 'products');

//now for the features table, where i'll be creating the features table and modifying the products table too
// i'll take the productId from the feature row
// query the products table with that productId
//then add the id of the