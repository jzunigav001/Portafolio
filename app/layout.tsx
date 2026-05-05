import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jonatan Zuniga | Portfolio",
  description:
    "Portfolio de Jonatan Zuniga, desarrollador web enfocado en interfaces limpias, proyectos publicados y experiencias digitales."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
