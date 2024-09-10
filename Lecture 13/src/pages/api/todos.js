let todos = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(todos);
  } else if (req.method === 'POST') {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
