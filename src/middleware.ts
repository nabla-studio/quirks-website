import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const isDev = process.env.NODE_ENV !== "production";

  const cspHeader = `
    default-src 'self';
    script-src 'self' ${
      isDev
        ? `'unsafe-eval' 'unsafe-inline' 'nonce-${nonce}'`
        : `'nonce-${nonce}' 'strict-dynamic'`
    } https://www.googletagmanager.com;
    style-src 'self' ${isDev ? "'unsafe-inline'" : `'nonce-${nonce}'`};
    img-src 'self' blob: data: ${process.env.VERCEL_URL};
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    ${
      isDev
        ? ""
        : `
    block-all-mixed-content;
    upgrade-insecure-requests;`
    };
`;

  const requestHeaders = new Headers();
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    // Replace newline characters and spaces
    cspHeader.replace(/\s{2,}/g, " ").trim(),
  );

  return NextResponse.next({
    headers: requestHeaders,
    request: {
      headers: requestHeaders,
    },
  });
}
