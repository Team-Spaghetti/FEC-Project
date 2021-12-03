const util = require('util');
const exec = util.promisify(require('child_process').exec);


const loadCommands = [];
const files = {
  products: '../../productsCSV/products.csv',
  features: '../../productsCSV/features.csv',
  relatedproducts: '../../productsCSV/relatedproducts.csv',
  styles: '../../productsCSV/styles.csv',
  photos: '../../productsCSV/photos.csv',
  skus: '../../productsCSV/skus.csv'
};

async function load() {

  //constructing commands for loading specific csv into specific tables
  for (file in files) {
    loadCommands.push(`mongoimport -d fec -c ${file} --type csv --file ${files[file]} --headerline`);
  }

  for (command of loadCommands) {
    const { error } = await exec(command);
    if(error) {
      console.error(error);
      return;
    }
  }
  console.log('Database ready to go!');
  return;
}

load();
