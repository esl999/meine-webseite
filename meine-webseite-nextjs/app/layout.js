import "./globals.css";

export const metadata = {
  title: "Meine Webseite",
  description: "Meine erste Webseite mit Next.js und Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
