import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Apple TV 4k - Apple",
  description: "Apple TV 4k",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg"
        />
        <link
          rel="apple-icon"
          href="/favicon.svg"
          type="image/svg"
        />
        <title>Apple TV 4k - Apple</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white relative overflow-y-auto overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
