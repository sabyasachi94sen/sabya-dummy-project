'use client'
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useMediaQuery } from "react-responsive";
import { Footer } from "@/components/Footer"
import { Suspense, useState,useEffect } from "react";
import { Loader } from "@/commons/Loader";

export default function RootLayout({ children }) {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 992px)'
  })

  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);



  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SLHUB</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
      {mounted && <Suspense fallback={<Loader />}>
      <Navbar isResponsive={isDesktopOrLaptop} />
        {children}
      <Footer />
      </Suspense>}
      </body>
    </html>
  );
}
