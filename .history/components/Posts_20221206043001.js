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

  console.log(posts);

  return <div></div>;
}

export default Posts;
