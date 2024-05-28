"use client";

import React, { useEffect } from "react";

const ErrorComponent = () => {
  useEffect(() => {
    console.log();
  }, []);
  return (
    <div className="text-center">
      <h1>Something went, wrong. please try again later</h1>
      <button className="hover:text-amber-500" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorComponent;
