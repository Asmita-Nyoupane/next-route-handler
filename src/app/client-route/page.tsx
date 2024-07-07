"use client";
import { ServerOnlyFunction } from "../utils/serverFunction";
const ClientRoute = () => {
  console.log("Client rote");
  const result = ServerOnlyFunction();
  return (
    <div>
      <h2>Client Route </h2>
      <p>{result}</p>
    </div>
  );
};

export default ClientRoute;
