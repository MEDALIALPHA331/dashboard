import { NextResponse } from "next/server";
import data from "./fake-data.json";

export async function GET(request: Request) {
  return NextResponse.json(data);
}
