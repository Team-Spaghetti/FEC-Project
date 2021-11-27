CREATE TABLE products (
    id integer NOT NULL primary key,
    name character varying,
    slogan character varying,
    description character varying,
    category character varying,
    default_price integer,
    features integer [],
    styles integer [],
    relatedProducts integer []
);

create table features (
  id integer not null primary key,
  productId integer,
  feature character varying,
  value character varying
);

create table styles (
  id integer not null primary key,
  productId integer,
  name character varying,
  sale_price integer,
  original_price integer,
  default_style boolean,
  skus integer [],
  photos integer []
);

create table skus (
  id integer not null primary key,
  styleId integer,
  size character varying,
  quantity integer
);

create table photos (
  id integer not null primary key,
  styleId integer,
  url character varying,
  thumbnail_url character varying
);

create table relatedproducts (
  id integer not null primary key,
  current_product_id integer,
  related_product_id integer
);

ALTER TABLE products
ADD CONSTRAINT name_unique UNIQUE (name);

-- //to delete all rows form a table: truncate tablename;

CREATE INDEX ON products (id);

update products
set features = array_append(features, 2)
where id = 2;

update products
set features = array_append(features, $1)
where id = $2;

select * from products order by id asc;

-- test styles input types
insert into styles (id, productid, name, sale_price, original_price, default_style) values(6,1,'Dark Grey & Black',null,170,'0');