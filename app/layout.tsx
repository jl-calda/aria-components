import "./globals.css";

export const metadata = {
  title: "Aria Components",
  description: "reusable aria components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
