import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Protofolio",
  description: "Sadrach Harmasantyo Portofolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
