const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => { 
  const result = await mongodb.getDatabase().db().collection('comments').find();
  result.toArray().then((comments) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(comments);
  });
};

const getSingle = async (req, res) => { 
  const commentId = ObjectId.createFromHexString(req.params.id);
  const result = await mongodb.getDatabase().db().collection('comments').find({ _id: commentId });
    result.toArray().then((comments) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(comments[0]);
    });
};
//hello
module.exports = {getAll, getSingle};