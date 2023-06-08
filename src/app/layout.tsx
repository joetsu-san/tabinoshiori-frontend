"use client";

import { RecoilRoot } from "recoil";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import FooterNav from "./components/FooterNav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <Providers>
        <html lang="ja">
          <body className={inter.className}>
            {children}
            <FooterNav />
          </body>
        </html>
      </Providers>
    </RecoilRoot>
  );
}
