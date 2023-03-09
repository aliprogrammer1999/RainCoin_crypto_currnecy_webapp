import React from "react";
import Image from "next/image";
import userimg from "../../../public/assest/user_img.jpg";
const User = () => {
  return (
    <div className="dark:bg-bg-main bg-gray-400 w-full rounded-md p-2">
      <div className="flex gap-1">
        <Image
          src={userimg}
          width={400}
          height={400}
          className="w-10 h-10 object-cover rounded-full border-color-primery"
        />
        <h1>Alirg</h1>
      </div>
    </div>
  );
};
export default User;
