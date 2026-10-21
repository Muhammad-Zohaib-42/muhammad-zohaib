import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

const siteUrl = "https://zohaib-ranjha.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Zohaib | Full-Stack MERN Developer",
    template: "%s | Muhammad Zohaib",
  },
  description: "Muhammad Zohaib is a Full-Stack MERN Developer based in Lahore, Pakistan, building modern web applications with React, Next.js, TypeScript, Node.js, and MongoDB.",
  applicationName: "Muhammad Zohaib Portfolio",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Muhammad Zohaib Portfolio",
    title: "Muhammad Zohaib | Full-Stack MERN Developer",
    description: "Explore my web development projects, skills, experience, and achievements.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zohaib | Full-Stack MERN Developer",
    description: "Full-Stack MERN Developer based in Lahore, Pakistan.",
    images: ["/og-image.png"],
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${poppins.className}`}>{children}</body>
    </html>
  );
}
