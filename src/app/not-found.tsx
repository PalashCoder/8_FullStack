import React from "react";
import Image from "next/image";
import NotFoundImage from "../../public/404.svg";

const NotFound = () => {
  return (
    <div className="max-h-screen h-screen p-6 flex justify-center">
      <Image src={NotFoundImage} alt="404 not found" />
    </div>
  );
};
export default NotFound;
