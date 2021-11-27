// Looking at the csv files, it seems i have a lot of data in the tables
// it'll be wieldy to store the features in an array in the products. it appears
// that the products table stores very simple information about the product
// table.when a gets for the products is made, little information is supplied
// however, when  information for a particular product is made, then we return
// with more detailed information containing the features of that product.

// In mongo, what
// i can do in mongo is use populate on the features column in the products
// table.

//   in psql, i can include the product id which will be a foriegn key to the
// product that the feature is linked to.i'll then index this key.  i'll do the same for
// styles

// for the photos, they come along with the styles.i'll store a photos table in psql that'll
// have a foreign key of style id which will be indexed to allow for easy fetching of
// photos associated with a particular style.i'll do the same for skus

// if i were to create a landing page, on the first page, just the products with minimal information
// will be displayed

// however, on clicking a particular product, there the product will be returned, the product table will be
// to joined to the features to fetch the features of that product, the products table will also be
// joined to the styles table to fetch the styles of that product, the styles of that product will be
// joined to the photos to fetch photos of that style, the product table will also be joined to the skus
// to fetch the skus of that product, and the product table will be joined to the related products
// table to fetch the related products of that table

// there's a lot of indexing taking place so i'm going to see if i can make use of the
// innate indexing provided by sql, the primary key.so in the products table
// i'll store a features array that will have the primary keys of the features associated
// with that table.that way, when i search for features subsequently, i only need to
// use the array to find the features.i'll do the same for the styles. in the styles, ill
// have a photos field that will store the primary keys of the photos associated with
// that style.i'll also have a related products field that'll store the
// product ids of the products related to a given product.

// Sequence of Action
// one way i could go about this is to populate the products table reserving an empty array
// for the features and styles and related products.then as i populate the features table
// i'll add the feature primary id to the features array in the products table as i populate features
// then i'll add the styles primary id to the styles array in the products as i populate the styles. the styles itself will have an empty array of skus and photos.
// table.for the related products, i'll add them to the related products array of the
// products table as i iterate through them.

// skus & photos
// as i populate the skus, i'll add the primary ids from the skus into the into the skus array in styles
// as i populate the photos, i'll add the primary ids from the photos into the into the photos array in styles