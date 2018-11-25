const { Comments, ProductInfo } = require('../database/models');


module.exports = {
  get: (req, res) => {
    const { id } = req.params;
    ProductInfo
      .find({ prodId: id })
      .then(result => res.status(200).send(result))
      .catch(err => console.error(err));
    // Comments
    //   .find({ prodId: id })
    //   .then(result => res.status(200).send(result))
    //   .catch(err => console.error(err));
  },
  getSort: (req, res) => {
    const { type } = req.params;
    const { limit } = req.params;
    const { filters } = req.query;
    const { id } = req.params;
    let field;
    if (type === 'relevant') {
      field = 'user';
    } else if (type === 'helpfulButton') {
      field = 'yesRating';
    } else if (type === 'newest') {
      field = 'date';
    }


    if (filters !== '[]') {
      Comments
        .find({ prodRating: { $in: JSON.parse(filters) }, prodId: id })
        .limit(parseInt(limit, 10))
        .sort([[field, -1]])
        .then(result => res.status(200).send(result))
        .catch(err => console.error(err));
    } else {
      Comments
        .find({ prodId: id })
        .limit(parseInt(limit, 10))
        .sort([[field, -1]])
        .then(result => res.status(200).send(result))
        .catch(err => console.error(err));
    }
  },
};



