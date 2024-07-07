import React from "react";
import { ServerOnlyFunction } from "../utils/serverFunction";
const ServerRoute = () => {
  console.log("Server rote");
  const result = ServerOnlyFunction();
  return (
    <div>
      <h2>Server Route </h2>
      <p>{result}</p>
    </div>
  );
};

export default ServerRoute;
