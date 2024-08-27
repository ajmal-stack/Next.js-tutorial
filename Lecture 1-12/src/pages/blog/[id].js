// src/pages/blog/[id].js
import { useRouter } from 'next/router';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      <p>This is a dynamic blog post page.</p>
    </div>
  );
};

export default BlogPost;
