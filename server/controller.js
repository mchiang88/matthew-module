const Sequelize = require('sequelize');
const Comments = require('../database/models');

const { Op } = Sequelize;

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
    const { filters } = req.query;
    let field;
    if (type === 'relevant') {
      field = 'user';
    } else if (type === 'helpfulButton') {
      field = 'yesRating';
    } else if (type === 'newest') {
      field = 'date';
    }

    if (filters !== '[]') {
      console.log(filters)
      Comments.findAll({
        order: [[`${field}`, 'DESC']],
        limit: parseInt(limit, 10),
        where: { prodRating: { [Op.or]: JSON.parse(filters) } },
      })
        .then((result) => {
          res.status(200).send(result);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      Comments.findAll({ order: [[`${field}`, 'DESC']], limit: parseInt(limit, 10) })
        .then((result) => {
          res.status(200).send(result);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  },
};
