// src/pages/api/post/[id].js
export default function handler(req, res) {
  const { id } = req.query;
  res.status(200).json({
    postId: id,
    title: `Post ${id}`,
    content: 'This is a dynamic post',
  });
}
