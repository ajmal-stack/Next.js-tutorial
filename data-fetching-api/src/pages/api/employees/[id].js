// src/pages/api/employees/[id].js
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('employeeDB');
  const collection = db.collection('employees');

  const { id } = req.query;

  if (req.method === 'GET') {
    // Handle GET request for single employee
    const employee = await collection.findOne({ _id: new ObjectId(id) });
    res.status(200).json(employee);
  } else if (req.method === 'PUT') {
    // Handle PUT request
    const updatedEmployee = req.body;
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedEmployee }
    );
    res.status(200).json(updatedEmployee);
  } else if (req.method === 'DELETE') {
    // Handle DELETE request
    await collection.deleteOne({ _id: new ObjectId(id) });
    res.status(200).json({ message: 'Employee deleted' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
