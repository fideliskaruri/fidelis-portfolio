import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Fidelis Karuri",
  description: "Fidelis Karuri's developer portfolio website",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`antialiased bg-blue-500 `} 
      >
        {children}
      </body>
    </html>
  );
}
