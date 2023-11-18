const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectID } = require('mongodb');

const app = express();
const port = 3000;
const mongoURL = 'mongodb://localhost:27017';
const dbName = 'winkledb'; 

app.use(bodyParser.json());

let db;

MongoClient.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  db = client.db(dbName);
});

app.get('/api/products', async (req, res) => {
  const users = await db.collection('products').find().toArray();
  res.json(users);
});

app.post('/api/productadd', async (req, res) => {
  const newUser = req.body;
  const result = await db.collection('products').insertOne(newUser);
  res.json(result.ops[0]);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
