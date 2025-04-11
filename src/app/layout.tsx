import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina especializada",
  description: "Oficina de carros",
  keywords: ["oficina", "oficina carros", "carros", "manutenção"],
  openGraph:{
    title: "DevMotors - Sua oficina especializada",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`],
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
