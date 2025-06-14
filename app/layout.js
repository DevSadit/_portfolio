// layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientComponents from "./_landing/_components/ClientComponents";
import Navbar from "./_landing/navbar/Navbar";
import Footer from "./_landing/Footer/Footer";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sh Ehesan",
  description: "A Web Developer",
  colorScheme: "dark",
  icons: {
    url: "favicon.ico",
    href: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black dark:bg-black min-h-screen`}
        suppressHydrationWarning
      >
        <Navbar />
        <main>
          <ClientComponents>{children}</ClientComponents>
        </main>
        <Footer />
      </body>
    </html>
  );
}
