import "./globals.css"; // Import your global CSS or styles
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Amarnath Bhat - Portfolio",
  description:
    "Full-stack developer specializing in MERN stack. Student at MIT Manipal with passion for innovative web solutions.",
  keywords: [
    "Amarnath Bhat",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Amarnath Bhat" }],
  creator: "Amarnath Bhat",
  openGraph: {
    title: "Amarnath Bhat - Portfolio",
    description: "Full-stack developer specializing in MERN stack",
    url: "https://mr0.vercel.app",
    siteName: "Amarnath Bhat Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarnath Bhat - Portfolio",
    description: "Full-stack developer specializing in MERN stack",
    creator: "@amarbhat2011",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="background">
        <Header />
        <main className="min-h-[70vh] overflow-hidden">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
