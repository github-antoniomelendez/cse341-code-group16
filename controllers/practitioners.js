const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => { 
  const result = await mongodb.getDatabase().db().collection('practitioners').find();
  result.toArray().then((practitioners) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(practitioners);
  });
};

const getSingle = async (req, res) => { 
  const practitionerId = ObjectId.createFromHexString(req.params.id);
  const result = await mongodb.getDatabase().db().collection('practitioners').find({ _id: practitionerId });
    result.toArray().then((practitioners) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(practitioners[0]);
    });
};

module.exports = {getAll, getSingle};