import { data } from "@/lib/data";

export function GET() {
  return new Response(JSON.stringify(data));
}
