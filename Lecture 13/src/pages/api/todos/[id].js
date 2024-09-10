let todos = [{ id: 1, task: 'Learn Next.js' }];

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const updatedTodo = req.body;
    todos = todos.map((todo) =>
      todo.id === parseInt(id) ? updatedTodo : todo
    );
    res.status(200).json(updatedTodo);
  } else if (req.method === 'DELETE') {
    todos = todos.filter((todo) => todo.id !== parseInt(id));
    res.status(200).json({ message: 'Todo deleted' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
