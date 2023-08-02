import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Created by Sajjad Karim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
