import React from "react";
import { ServerOnlyFunction } from "../utils/serverFunction";
import ImageSlider from "../Components/image-slider";
const ServerRoute = () => {
  console.log("Server rote");
  const result = ServerOnlyFunction();
  return (
    <div>
      <h2 className="text-center text-2xl font-bold py-10">Server Route </h2>
      {/* <p>{result}</p> */}
      <ImageSlider />
    </div>
  );
};

export default ServerRoute;
