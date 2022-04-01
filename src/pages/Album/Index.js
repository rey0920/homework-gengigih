import { useState } from "react";

const Album = ({ title }) => {
  const [selectText, setSelectText] = useState("Deselect");

  return (
    <div className="flex bg-neutral-900 rounded-xl">
      <div className="w-4/5 mx-auto">
        <img
          src="https://i.scdn.co/image/ab67616d00001e02e319baafd16e84f0408af2a0"
          alt="gambar"
          className="w-full my-6 drop-shadow-xl"
        />
        <div className="my-6">
          <h5 className="text-md font-bold">{title.substring(0, 18)}...</h5>
          <button
            onClick={() =>
              setSelectText(selectText === "Deselect" ? "Selected" : "Deselect")
            }
          >
            {selectText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Album;
