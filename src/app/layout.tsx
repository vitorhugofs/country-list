import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "List with simple infos about the countries of the world.",
  keywords: ["Where in the world?", "List with simple infos about the countries of the world."],
  authors: [
    { 
      name: 'Vitor Hugo',
      url: 'https://github.com/vitorhugofs'
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <body>
        <Header />

        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
