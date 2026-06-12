import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata = {
  title: "Naufal Hakim — Software Developer",
  description: "Software engineer specializing in scalable backend systems and AI-powered automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} antialiased`}
        style={{ backgroundColor: '#0a0a0a', color: '#f5f5f5' }}
      >
        {children}
      </body>
    </html>
  );
}
