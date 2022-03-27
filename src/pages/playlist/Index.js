import data from "../../data/album";
import Album from "../Album/Index";

const Playlist = () => {
  console.log(data);
  return (
    <div className="playlist">
      <h1 className="text-2xl font-bold tracking-tighter">Recently Played</h1>
      <div className="mt-4 grid grid-cols-5 gap-5">
        {data.map((e) => (
          <Album key={e.id} title={e.name} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
