// server.ts
import { serve } from "https://deno.land/std@0.106.0/http/server.ts";

const server = serve({ port: 8000 });

console.log("Deno server is running at http://localhost:8000/");

for await (const request of server) {
  const filePath = request.url === "/" ? "/index.html" : request.url;
  const file = await Deno.readFile(`.${filePath}`);
  request.respond({ body: file });
}
