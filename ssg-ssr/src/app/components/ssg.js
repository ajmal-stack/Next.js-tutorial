// src/pages/static.js

export async function getStaticProps() {
  // Fetching static data
  const data = [
    { id: 1, title: 'Learn Next.js with SSG' },
    { id: 2, title: 'Static Generation is Fast' },
  ];

  return {
    props: {
      posts: data,
    },
  };
}

export default function StaticPage({ posts }) {
  return (
    <div>
      <h2>Static Generation (SSG) Example</h2>
      <ul>
        {posts && posts.length > 0 ? ( // Ensuring posts is not undefined or empty
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ) : (
          <p>No posts available</p>
        )}
      </ul>
    </div>
  );
}
