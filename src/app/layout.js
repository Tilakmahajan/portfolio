import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../componants/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Tilak Mahajan's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
        {children}
        </div>
        </body>
    </html>
  );
}
