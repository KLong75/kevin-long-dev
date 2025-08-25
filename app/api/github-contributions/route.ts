// app/api/github-contributions.ts

export async function GET() {
  const response = await fetch("https://github.com/users/KLong75/contributions");
  const svg = await response.text();
  return new Response(svg, {
    headers: { "Content-Type": "image/svg+xml" }
  });
}