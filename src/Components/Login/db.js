const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
const dbName = 'yourDatabaseName'; // Replace with your database name

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    // Perform database operations here

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = { connect };
