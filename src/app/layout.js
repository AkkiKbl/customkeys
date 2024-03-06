import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CustomKeys | You design and we build",
  description:
    "Craft your dream setup with custom keyboards built by CustomKeys. We design and build personalized keyboards to fit your style and functionality needs. Explore our selection or get a free quote for a fully customized keyboard.",
  keywords: [
    "Mechanical Keyboard",
    "CherryMX",
    "Custom Keyboard",
    "ergonomic keyboard",
    "gaming keyboard",
    "hot-swap keyboard",
    "keyboard case",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
