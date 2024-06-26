import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" width={200} height={200} alt="loading..." />
    </div>
  );
};

export default Loading;
