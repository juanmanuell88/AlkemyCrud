const db = require("../models");
const Operation = db.operations;
const Op = db.Sequelize.Op;

// Create and Save a new Operation
exports.create = (req, res) => {
  // Validate request
  if (!req.body.concept) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Operation
  const operation = {
    concept: req.body.concept,
    amount: req.body.amount,
    date: req.body.date,
    type: req.body.type,
  };

  // Save Operation in the database
  Operation.create(operation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Operation."
      });
    });
};

// Retrieve all Operations from the database.
exports.findAll = (req, res) => {
  Operation.findAll({ order: [['id', 'DESC']], limit: 10})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving operations."
      });
    });
};

// Find a single Operation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Operation.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Operation with id=" + id
      });
    });
};

// Update a Operation by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Operation.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Operation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Operation with id=${id}. Maybe Operation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Operation with id=" + id
      });
    });
};

// Delete a Operation with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Operation.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Operation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Operation with id=${id}. Maybe Operation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Operation with id=" + id
      });
    });
};

// Delete all Operations from the database.
exports.deleteAll = (req, res) => {
  Operation.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Operations were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all operations."
      });
    });
};

// find all published Operation
exports.findAllPublished = (req, res) => {
  Operation.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving operations."
      });
    });
};
