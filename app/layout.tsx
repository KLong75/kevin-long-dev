// import from next
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
// import fonts
import { shareTechMono, ptMono, notoSansMono, vt323 } from "@/fonts";
// import { geistSans, geistMono } from "@/fonts";
// import css
import "./globals.css";
// import components
import Header from "@/ui/header";
import Footer from "@/ui/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kevinlong.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  title: {
    template:
      "%s | Kevin Long | Full Stack Developer",
    default: "Kevin Long | Full Stack Developer",
  },
  description:
    "Portfolio website for Kevin Long, a full stack developer.",
  // openGraph: {
  //   images: "/opengraph-image.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSansMono.variable} ${vt323.variable} ${ptMono.variable} ${shareTechMono.variable} min-h-screen flex flex-col justify-center items-center antialiased`}>
        <Header />
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
