const util = require('util');
const exec = util.promisify(require('child_process').exec);
const path = require('path');
require("dotenv").config({ path: path.join(__dirname, "../../config.env") });

const loadCommands = [];
const files = {
  products: 'productsCSV/products.csv',
  features: 'productsCSV/features.csv',
  relatedproducts: 'productsCSV/relatedproducts.csv',
  styles: 'productsCSV/styles.csv',
  photos: 'productsCSV/photos.csv',
  skus: 'productsCSV/skus.csv'
};

async function load() {

  //constructing commands for loading specific csv into specific tables
  for (file in files) {
    loadCommands.push(`mongoimport --uri "${process.env.MONGO_URI}" -c ${file} --type csv --drop --file ${files[file]} --headerline`);
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
