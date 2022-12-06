import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

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
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
