// src/pages/api/user.js
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe', age: 30 });
}
