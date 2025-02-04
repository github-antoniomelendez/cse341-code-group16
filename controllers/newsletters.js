const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => { 
  const result = await mongodb.getDatabase().db().collection('newsletters').find();
  result.toArray().then((newsletters) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(newsletters);
  });
};

const getSingle = async (req, res) => { 
  const newsletterId = ObjectId.createFromHexString(req.params.id);
  const result = await mongodb.getDatabase().db().collection('newsletters').find({ _id: newsletterId });
    result.toArray().then((newsletters) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(newsletters[0]);
    });
};

module.exports = {getAll, getSingle};