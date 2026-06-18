import { useState, useEffect } from "react";
import { getPosts } from "./getPosts";
import { PostList } from "./PostList";

export function PostsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let cancel = false;

    getPosts().then((data) => {
      if (!cancel) {
        setPosts(data); // state change - re-render - yes
        setIsLoading(false); // state change - re-render - yes
      }
    });
    return () => {
      cancel = true;
    };
  }, []);
  return <PostList posts={posts} />;
}
