// testConnection.js
const { MongoClient } = require('mongodb');

const uri =
  'mongodb+srv://uniqueiit22:password%40123@cluster0.sctsp.mongodb.net/datafetching?retryWrites=true&w=majority';

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('Connected successfully to MongoDB');
    await client.close();
  } catch (err) {
    console.error('Connection failed:', err);
  }
}

run();
