// src/pages/api/employees.js

import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('employeeDB');
  const collection = db.collection('employees');

  if (req.method === 'GET') {
    // Handle GET request
    const employees = await collection.find({}).toArray();
    res.status(200).json(employees);
  } else if (req.method === 'POST') {
    // Handle POST request
    const newEmployee = req.body;
    await collection.insertOne(newEmployee);
    res.status(201).json(newEmployee);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
