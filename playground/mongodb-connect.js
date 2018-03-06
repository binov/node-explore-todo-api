const {MongoClient, ObjectID} = require('mongodb')

/* Object destructuring

var user = {name: 'Andrew', age: 25}
var {name} = user
console.log(name) */

/*
to create object ids
var obj = new ObjectID()
console.log(obj);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server')
  }
  console.log('Connected to MongoDB Server')
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todos', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  db.collection('Users').insertOne({ // We can pass _id if needed.Timestamp available when we use object ids
    name: 'Bino',
    age: 32,
    location: 'Kolenchery'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert users', err)
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
  })

  client.close()
})
