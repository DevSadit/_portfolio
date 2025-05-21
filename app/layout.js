// layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientComponents from "./_landing/_components/ClientComponents";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black dark:bg-black min-h-screen`}
        suppressHydrationWarning
      >
        <ClientComponents>{children}</ClientComponents>
      </body>
    </html>
  );
}