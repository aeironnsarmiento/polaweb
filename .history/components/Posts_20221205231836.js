import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "Aeironn",
    userImg: "https://i.imgur.com/0CE7jHL.png",
    img: "https://i.imgur.com/0CE7jHL.png",
    caption: "This is a test caption",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
