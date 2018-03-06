const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server')
  }
  console.log('Connected to MongoDB Server')
  const db = client.db('TodoApp')

  // find returns mongodb cursor.cursor has many methods
  // For eg: toArray returns a Promise for an array of objects(documents)
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('All Todos')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch Todos', err)
  })

  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log('Pending Todos')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch Todos', err)
  })

  // Finding by id. We cannot use _id as a string becasue its actually a ObjectID.
  // We need to use ObjectID constructor function
  db.collection('Todos').find({
    _id: new ObjectID('5a9d881f7a29bc107c5ac61a')
  }).toArray().then((docs) => {
    console.log('Todo by id')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch Todos', err)
  })

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todo count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch Todos', err)
  })

  db.collection('Users').find({name: 'Bino'}).toArray().then((docs) => {
    console.log('Users with name Bino')
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Unable to fetch users', err)
  })

//  client.close()
})
