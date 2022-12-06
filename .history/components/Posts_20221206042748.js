import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

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
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

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
