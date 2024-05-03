"use client";

import React from "react";
import { useEffect } from "react";

const error = () => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center">
      <h1>Something went, wrong. please try again later</h1>
      <button className="hover:text-amber-500" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default error;
