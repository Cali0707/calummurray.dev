import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Calum Murray",
  description: "Hi! Mi name is Calum, and this is my personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " min-h-screen"}>
                {children}
      <Footer
        elements={[
          {
            title: "GitHub",
            description: "Check out my GitHub Profile.",
            href: "https://github.com/Cali0707",
            newPage: true,
          },
          {
            title: "LinkedIn",
            description: "Connect with me on LinkedIn!",
            href: "https://www.linkedin.com/in/calum-ra-murray",
            newPage: true,
          },
          {
            title: "Resume",
            description: "Check out my Resume.",
            href: "/resume.pdf",
            newPage: true
          },
          {
            title: "Contact",
            description: "Get in contact with me.",
            href: "maito:calum.murray@mail.utoronto.ca",
            newPage: true,
          },
          {
            title: "Blog",
            description: "Check out my blog!",
            href: "/blog",
          },
        ]}
      />
            </body>
    </html>
  );
}
