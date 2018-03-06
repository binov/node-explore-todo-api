const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server')
  }
  console.log('Connected to MongoDB Server')
  const db = client.db('TodoApp')

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne - deletes the first occurence
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result)
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Users').deleteMany({name: 'Bino'}).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a9d8d579a9819351c7c4034')
  }).then((result) => {
    console.log(result)
  })

//  client.close()
})
