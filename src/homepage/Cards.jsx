import React from "react";

const Cards = ({ item }) => {
  return (
    <main className="w-full h-fit bg-[#5eead4] py-5 flex justify-center">
      <div className="bg-white border w-80 h-96  rounded-3xl shadow-2xl ">
        <div key={item.id}>
          <img
            src={item.imageurl}
            alt=""
            className="bg-auto rounded-3xl p-3 "
          />
          <p className="text-md font-bold text-center">
            Latitude :{item.latitude}
          </p>
          <p className="text-md font-bold text-center">
            Longitude : {item.longitude}
          </p>
          <p className="text-md font-bold text-center">
            Description :{item.description}
          </p>
          <p className="text-md font-bold text-center">
            updatedate :{item.updatedat.split("", 10)}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Cards;
