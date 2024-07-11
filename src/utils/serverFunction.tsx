import "server-only";
export function ServerOnlyFunction() {
  console.log("Sensitive data, interact with database");
  return "server called";
}
