import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div>
      {/* Header */}
      <div>
        <img src={userImg} className="rounded-full" h-12 w-12 alt="" />
        <p>{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Image */}

      {/* Buttons */}

      {/* Caption */}

      {/* Comments */}

      {/* Input Box */}
    </div>
  );
}

export default Post;
