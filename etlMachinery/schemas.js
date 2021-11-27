//products schema
{
  id: Number primary,
  name: String unique,
  slogan: String,
  description: String,
  category: String,
  default_price: Number
}

// related products schema
{
  id: Number unique,
  current_product_id: Number,
  related_product_id: Number,
}

//skus
{
  id: Number unique,
  styleId: Number,
  size: String,
  quantity: Number,
}

// features
{
  id: Number unique,
  productId: Number,
  feature: String,
  value: String,
}

// styles
{
  id: Number unique,
  productId: Number,
  name: String,
  sale_price: Number(default null),
  original_price: Number,
  default_style: Boolean
}

//photos
{
  id: Number unique,
  styleId: Number,
  url: String,
  thumbnail_url: String
}