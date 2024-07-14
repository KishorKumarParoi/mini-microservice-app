import { useEffect, useState } from "react";
import api from "./api/api";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await api.get("/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="border-2 p-2 text-black font-bold"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="p-2">
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  console.log(renderedPosts);

  return (
    <div className="flex-col justify-center">
      {renderedPosts}
    </div>
  );
};

export default PostList;
