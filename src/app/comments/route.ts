import { NextRequest } from "next/server";
import { comments } from "./data";

// query parameter

export async function GET(request: NextRequest) {
  const SearchParams = request.nextUrl.searchParams;
  // console.log("🚀 ~ GET ~ SearchParams:", SearchParams);
  const query = SearchParams.get("query");
  // console.log("🚀 ~ GET ~ query :", query);

  const FilteredComment = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(FilteredComment);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
