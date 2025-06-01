const TodoModel = require('../models/todo.model');

const createTodo = async (req, res, next) => {
   const createdModel = await TodoModel.create(req.body)
    res.status(201).json(createdModel)
}

module.exports = {createTodo}