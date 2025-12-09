import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manuel.Code",
  description: "Portafolio de Manuel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
