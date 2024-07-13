"use client";
import React, { useEffect } from "react";

const error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(`${error}`);
  }, [error]);

  return (
    <div className="text-red-400 flex justify-center items-center mt-40 text-2xl font-semibold">
      Error while fetchng user data{" "}
    </div>
  );
};

export default error;
