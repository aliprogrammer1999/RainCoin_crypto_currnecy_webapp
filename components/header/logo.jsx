import React from "react";
import { GrBitcoin } from "react-icons/gr";

const Logo = () => {
  return (
    <div className="flex flex-col">
      <h1 className="flex items-center text-3xl font-bold">
        <span className="text-color-primery">R</span>
        <span className=" mt-2">
          <GrBitcoin />
        </span>
      </h1>
      <span className="-mt-3 text-sm font-bold">ain</span>
    </div>
  );
};

export default Logo;
