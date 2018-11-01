const Comments = require('../database/models');

module.exports = {
  get: (req, res) => {
    Comments.findAll()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getSort: (req, res) => {
    const { type } = req.params;
    const { limit } = req.params;
    let field;
    if (type === 'relevant') {
      field = 'user';
    } else if (type === 'helpfulButton') {
      field = 'yesRating';
    } else if (type === 'newest') {
      field = 'date';
    }
    Comments.findAll({ order: [[`${field}`, 'DESC']], limit: parseInt(limit, 10) })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
