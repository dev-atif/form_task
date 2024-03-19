'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(()=>{
    require('bootstrap/dist/js/bootstrap.min.js')
  })
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
