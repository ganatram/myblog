export function PostList({ posts }) {
  return (
    <ul className="list-none">
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  );
}
