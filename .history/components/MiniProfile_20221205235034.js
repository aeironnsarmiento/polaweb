import React from "react";

function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img className="w-16 h-16 rounded-full border p-[2px]" alt="" />
      <div className="flex-1 mx-4">
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
    </div>
  );
}

export default MiniProfile;