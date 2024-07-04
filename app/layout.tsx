import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import "react-datepicker/dist/react-datepicker.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zuum",
  description: "Video Chat Seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        variables:{
          colorText:"#fff",
          colorPrimary:'#0e78f9',
          colorBackground:'#1c1f2e',
          colorInputText:'#000',
        }
      }}
      >
      <body className={`${inter.className} bg-dark-2`}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
