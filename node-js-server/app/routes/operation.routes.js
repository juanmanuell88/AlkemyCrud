module.exports = app => {
  const operations = require("../controllers/operation.controller.js");

  var router = require("express").Router();

  // Create a new Operation
  router.post("/", operations.create);

  // Retrieve all Operations
  router.get("/", operations.findAll);

  // Retrieve a single Operation with id
  router.get("/:id", operations.findOne);

  // Update a Operation with id
  router.put("/:id", operations.update);

  // Delete a Operation with id
  router.delete("/:id", operations.delete);

  app.use('/api/operations', router);
};
