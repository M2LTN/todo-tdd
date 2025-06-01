const express = require('express')
const todoRoutes = require('./routes/todo.routes')
const app = express()
const mongodb = require('./mongodb/mongodb.connect')

mongodb.connect()

app.use(express.json())

app.use('/todos', todoRoutes)

app.get('/', (req, res) => {
  res.send('express test')
})

app.listen(3015, () => {
  console.log('server is running')
})

module.exports = app