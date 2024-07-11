import fs, { readFileSync } from "fs";

const ServerComponentTwo = () => {
  readFileSync("src/Components/test.txt", "utf-8");
  return <div>ServerComponentTwo</div>;
};

export default ServerComponentTwo;
