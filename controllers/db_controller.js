const db = require("../models");
const fallacies = db.logical_fallacies;
const content = db.content

// Retrieve all Fallacies from the database.
exports.findAll = (req, res) => {
  fallacies.find()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : 
                err.message || "An error occured while retrieving fallacies"
        });
    });
};

// Find a single Fallacy with an id
exports.findOne = (req, res) => {
    var id = req.params.id;
    fallacies.findById(id)
        .then(data => {
            if (!data){
                res.status(404).send({message : "Fallacy with id " + id + " not found"});
            }
            else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({message : "Error retrieving fallacy with id " + id});
        });
};
const agg = [
    {
      '$sort': {
        'category': 1
      }
    }, {
      '$group': {
        '_id': '$category', 
        'fallacyKey': {
          '$push': {
            'key': '$_id', 
            'name': '$name'
          }
        }
      }
    }
  ];
// Retrieve all categories with their fallacies
exports.findAllByCategory = (req, res) => {
    fallacies.aggregate(agg)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({message : "Error retrieving fallacies"});
        });
};

// Retrieve content by name
exports.findContent = (req, res) => {
    var title = req.params.title.replace('_', ' ');
    content.findOne({title: title})
      .then(data => {
        if (!data){
          res.status(400).send({message : "Content with title " + title + " not found"});
        }
        else{
          res.send(data);
        }
      })
      .catch(err => {
        res.status(500).send({message : "Error retrieving content with title " + title});
      });
};
