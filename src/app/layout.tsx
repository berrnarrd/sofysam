import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Importing Roboto font with different weights
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Sofysam Fortune Enterprises - HVAC Supplies: Refrigerants, Compressor Oils, Copper Pipes, and More",
  description: "Sofysam Fortune Enterprises is a leading supplier of HVAC products including Refrigerants, Compressor Oils, Tapes, Filter Driers, Copper Tubes, Access Valves, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Sofysam Fortune Enterprises - HVAC Supplies: Refrigerants, Compressor Oils, Copper Pipes, and More</title>
        <meta name="description" content="Sofysam Fortune Enterprises is a leading supplier of HVAC products including Refrigerants, Compressor Oils, Tapes, Filter Driers, Copper Tubes, Access Valves, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="HVAC, Refrigerants, Compressor Oils, Copper Pipes, Tapes, Filter Driers, Access Valves, Sofysam Fortune Enterprises" />
        <meta name="author" content="Sofysam Fortune Enterprises" />
        <link rel="canonical" href="https://www.sofysamfortune.com/" />
        <meta property="og:title" content="Sofysam Fortune Enterprises - HVAC Supplies: Refrigerants, Compressor Oils, Copper Pipes, and More" />
        <meta property="og:description" content="Sofysam Fortune Enterprises is a leading supplier of HVAC products including Refrigerants, Compressor Oils, Tapes, Filter Driers, Copper Tubes, Access Valves, and more." />
        <meta property="og:url" content="https://www.sofysamfortune.com/" />
        <meta property="og:image" content="https://www.sofysamfortune.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sofysam Fortune Enterprises - HVAC Supplies: Refrigerants, Compressor Oils, Copper Pipes, and More" />
        <meta name="twitter:description" content="Sofysam Fortune Enterprises is a leading supplier of HVAC products including Refrigerants, Compressor Oils, Tapes, Filter Driers, Copper Tubes, Access Valves, and more." />
        <meta name="twitter:image" content="https://www.sofysamfortune.com/twitter-image.jpg" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}