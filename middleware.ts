import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let cspHeader = "";
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const environment = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;
  const isDevelopment = environment === "development";
  const isPreview = environment === "preview";
  const isProduction = environment === "production";
  const developmentCspHeader = `
    font-src 'self';
    style-src 'self' 'unsafe-inline';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    connect-src 'self' https://api.emailjs.com/;
    img-src 'self' data: ;
    frame-src 'none';
  `;
  const previewCspHeader = `
    font-src 'self' https://vercel.live/ https://assets.vercel.com https://fonts.gstatic.com;
    style-src 'self' 'unsafe-inline' https://vercel.live/fonts;
    script-src 'self' 'unsafe-inline' https://vercel.live/ http://www.gstatic.com https://www.gstatic.com;
    connect-src 'self' https://vercel.live/ https://vitals.vercel-insights.com https://*.pusher.com/ wss://*.pusher.com/ https://api.emailjs.com/;
    img-src 'self' data: https://vercel.com/ https://vercel.live/;
    frame-src 'self' https://vercel.live/;
  `;
  const productionCspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    connect-src 'self' https://stream.mux.com https://inferred.litix.io/ https://manifest-gcp-us-east1-vop1.fastly.mux.com https://chunk-gcp-us-east1-vop1.edgemv.mux.com https://manifest-gcp-us-east4-vop1.fastly.mux.com https://chunk-oci-us-ashburn-1-vop1.edgemv.mux.com https://*.mux.com https://api.emailjs.com/;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `;

  if (isDevelopment) {
    cspHeader = developmentCspHeader;
  } else if (isPreview) {
    cspHeader = previewCspHeader;
  } else if (isProduction) {
    cspHeader = productionCspHeader;
  }

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");

  return response;
}