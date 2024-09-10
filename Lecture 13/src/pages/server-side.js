export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      posts: data.slice(0, 5), // Fetch first 5 posts
    },
  };
}

export default function ServerSide({ posts }) {
  return (
    <div>
      <h2>Server-Side Data Fetching</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
