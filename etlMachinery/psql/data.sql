CREATE TABLE products (
    id integer NOT NULL,
    name character varying,
    slogan character varying,
    description character varying,
    category character varying,
    default_price integer
);

create table features (
  id integer not null primary key,
  productId integer,
  feature character varying,
  value character varying
);

create table styles (
  id integer not null,
  productId integer,
  name character varying,
  sale_price integer,
  original_price integer,
  default_style boolean
);

create table skus (
  id integer not null,
  styleId integer,
  size character varying,
  quantity integer
);

create table photos (
  id integer not null,
  styleId integer,
  url character varying,
  thumbnail_url character varying
);

create table relatedproducts (
  id integer not null,
  current_product_id integer,
  related_product_id integer
);

-- //to delete all rows form a table: truncate tablename;

-- update products
-- set features = array_append(features, 2)
-- where id = 2;

-- update products
-- set features = array_append(features, $1)
-- where id = $2;

-- select * from products order by id asc;

-- test styles input types
'../../'

\copy features from '../../productsCSV/features.csv' with delimiter ',' csv HEADER;

\copy products from '../../productsCSV/products.csv' with delimiter ',' csv HEADER;

\copy styles from '../../productsCSV/styles.csv' with delimiter ',' csv NULL AS 'null' HEADER;

\copy photos  from '../../productsCSV/photos.csv' with delimiter ',' csv HEADER;

\copy skus from '../../productsCSV/skus.csv' with delimiter ',' csv HEADER;

\copy relatedProducts from '../../productsCSV/relatedProducts.csv' with delimiter ',' csv HEADER;

-- add uniqueness to productId
-- ALTER TABLE products
-- ADD CONSTRAINT name_unique UNIQUE (name);

-- set indices
--//products
CREATE INDEX ON products (id);
CREATE INDEX ON features (productId);
CREATE INDEX ON relatedProducts (current_product_id);
CREATE INDEX ON styles (productId);
CREATE INDEX ON photos (styleId);
CREATE INDEX ON skus (styleId);
