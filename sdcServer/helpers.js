const {
  RelatedProducts,
  Products,
  Photos,
  Features,
  Styles,
  Skus
} = require('../etlMachinery/mongo/Models/models');

function findPhotos(styleId) {
  return new Promise((res, rej) => {
    Photos.find({ styleId })
      .then(photos => {
        let newPhotos = JSON.parse(JSON.stringify(photos));
        for (photo of newPhotos) {
          delete photo._id;
          delete photo.id;
          delete photo.styleId;
        }
        res(newPhotos);
      })
      .catch(err => rej('Photos Error:', err))
  })
}
function findSkus(styleId) {
  return new Promise((res, rej) => {
    Skus.find({ styleId })
      .then(skus => {
        let newSkus = JSON.parse(JSON.stringify(skus));
        for (sku of newSkus) {
          delete sku._id;
          delete sku.id;
          delete sku.styleId;
        }
        res(newSkus);
      })
      .catch(err => rej('Skus Error:', err))
  })
}

module.exports = {findPhotos, findSkus};