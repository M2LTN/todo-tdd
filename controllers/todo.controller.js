const TodoModel = require('../models/todo.model');

const createTodo = async (req, res, next) => {
    try {
      const createdModel = await TodoModel.create(req.body);
      res.status(201).json(createdModel);
    } catch (error) {
      next(error);
    }
  };
  

module.exports = {createTodo}