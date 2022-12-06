import React from "react";
import Post from "./Post";

const DUMMY_DATA = [
    {
        id: '123',
        username: 'Aeironn',
        userImg: 'https://i.imgur.com/0CE7jHL.png',
        img: 'https://i.imgur.com/0CE7jHL.png',
        caption: 'This is a test caption',
        
    }

function Posts() {
  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
