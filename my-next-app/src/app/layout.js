import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Remove this line from the client component (metadata should be declared outside client components)
export const metadata = {
  title: "Creekside Car Wash",
  description: "Auto Care Website",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
         <head>
        <link rel="icon" href="/Images/favicon.webp" type="image/webp" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
