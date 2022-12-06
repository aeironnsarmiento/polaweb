function Story({ img, username }) {
  return (
    <div className="z-0">
      <img
        className="h-14 w-14 rounded-full p-[1.5px] border-purple-500 border-2"
        src={img}
        alt=""
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;
