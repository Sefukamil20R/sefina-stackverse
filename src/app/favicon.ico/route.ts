import { readFile } from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"

export async function GET() {
  const icon = await readFile(path.join(process.cwd(), "public", "icon-s.svg"))

  return new NextResponse(new Uint8Array(icon), {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
