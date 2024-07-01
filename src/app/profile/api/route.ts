import { cookies, headers } from "next/headers";

import { type NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const headerlist = headers();
  console.log("🚀 ~ GET ~ headerlist:", headerlist.get("Authorization"));
  const Theme = request.cookies.get("theme");
  console.log("🚀 ~ GET ~ Theme :", Theme);
  cookies().set("color", "pink");
  console.log(cookies().get("color"));
  return new Response("<h1>Profile page</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
