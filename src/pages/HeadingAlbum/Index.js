const HeadingAlbum = ({ title, desc, imgUrl }) => {
  return (
    <div className="flex">
      <div className="img">
        <img src={imgUrl} alt="img" width={200} className="drop-shadow-2xl" />
      </div>
      <div className="self-end tracking-tighter ml-4">
        <h6 className="text-md font-bold">PLAYLIST</h6>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-sm mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default HeadingAlbum;
