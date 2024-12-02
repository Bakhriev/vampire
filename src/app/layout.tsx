import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vampire: The Requiem",
  description: "Vampire: The Requiem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
