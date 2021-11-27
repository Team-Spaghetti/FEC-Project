// psql
//my plan for this project is to test my hypothesis
// i plan on creating 3 csv files
// one will be the products(primary) table
// i'll load this file into a table in the database
// then i'll load the features(secondary) file into the database
// the primary table will have a field called features that'll be an array
// as i load the features into their table
// i'll be simultaneously populating the features array in the primary
// table with the associated features
// the next csv file will have related tables(tertiary)
// as i iterate through the related csv
// i won't create any new tables
// i'll just update the related products array in the products table
// if i'm successful in this
// i'll be able to create an etl machine for psql that will be used in the
// sdc project

// while this approach seems good, it's not good for insertion. while it limits lookup time, it increases amount of work that needs to be done for insertion. it's ideal for databases what you won't be inserting into. eg: in the products database, you wont be inserting, you'll just be looking up. in this situation, if you have to insert say a new style, you have to update the styles table and the products table adding the style id to the product that style belongs to

// time to insert
// lookup literature on using and inserting into array fields in psql
// read into use of pool, which seems to be a driver you can use to manipulate psql database from within your node application
//now combine the tow to create your loading functions

//so i'll need 2 functions
// one function will load data into a new table
// another will edit data in an existing table

// loading will be of 3 forms
// one type reads & loads data into a table, plain and simple, type one
// the other reads, loads into a table and at the same time modifies another table, type one and two
// the other reads and modifies an existent table, it doesn't create a new table, type two

