export const config = {
  // Only run the middleware on the admin route
  matcher: "/docs",
};

export default function middleware(request: Request): Response {
  const url = new URL(request.url);

  if (url.pathname === "/docs") {
    url.href = "https://quirks-docs.vercel.app";
  }

  return Response.redirect(url);
}
