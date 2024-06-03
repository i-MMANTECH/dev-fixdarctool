import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderWeb3Modal from "./ProviderWeb3Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev-Fixdarctool",
  description: "A DApp that helps connect to your wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ProviderWeb3Modal>
      <body className={inter.className}>{children}</body>
      </ProviderWeb3Modal>
    </html>
  );
}
