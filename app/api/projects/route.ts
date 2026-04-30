import { NextResponse } from "next/server";

const DJANGO_API_URL =
  process.env.DJANGO_API_URL ?? "http://127.0.0.1:8000/api/projects/";

export async function GET() {
  try {
    const response = await fetch(DJANGO_API_URL, {
      cache: "no-store"
    });

    if (!response.ok) {
      return NextResponse.json({ projects: [] }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ projects: [] }, { status: 503 });
  }
}
