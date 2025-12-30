import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manuel.Code",
  description: "Portafolio de Manuel",
  icons: {
    icon: "/image/favicon-m.svg",
    shortcut: "/image/favicon-m.svg",
    apple: "/image/favicon-m.svg",
  },
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
