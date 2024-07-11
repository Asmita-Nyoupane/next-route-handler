import fs, { readFileSync } from "fs";

const ServerComponentOne = () => {
  readFileSync("src/Components/test.txt", "utf-8");
  return <div>ServerComponentOne</div>;
};

export default ServerComponentOne;
