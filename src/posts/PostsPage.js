import { useState, useEffect } from "react";
import { PostList } from "./PostList";
import { getPosts } from "./getPosts";
import { NewPostForm } from "./NewPostForm";
import { savePost } from "./savePosts";

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

  async function handleSave(newPostData) {
    const newPost = await savePost(newPostData);
    setPosts([newPost, ...posts]);
  }
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <PostList posts={posts} />
      <NewPostForm onSave={handleSave} />
    </>
  );
}
