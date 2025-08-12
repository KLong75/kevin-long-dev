// import from next
import type { Metadata } from "next";
// import fonts
// import { geistSans, geistMono } from "@/fonts";
// import css
import "./globals.css";
// import components
import Header from "@/ui/header";
import Footer from "@/ui/footer";

export const metadata: Metadata = {
  title: "Kevin Long | Full Stack Developer",
  description: "Portfolio website for Kevin Long, a full stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className="flex flex-col min-h-screen antialiased">
        <Header />
        <main className="flex-1 flex flex-col max-w-1200">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
