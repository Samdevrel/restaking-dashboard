import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaking Dashboard | @samdevrel",
  description: "EigenLayer ecosystem dashboard. Compare LRTs, track AVS rewards, and stake ETH for maximum yield.",
  keywords: ["EigenLayer", "restaking", "LRT", "eETH", "pufETH", "AVS", "ETH staking"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
