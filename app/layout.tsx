import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard"
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh")
};

/*
This is called a root layout and is required. 
Any UI you add to the root layout will be shared across all pages in your application. 
You can use the root layout to modify your <html> and <body> tags, and add metadata
https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages
*/
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
