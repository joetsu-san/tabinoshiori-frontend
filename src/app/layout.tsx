"use client";

import { RecoilRoot } from "recoil";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { FooterNav } from "@/components/FooterNav";
import { Header } from "@/components/Header";
import { SWRConfig } from "swr";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <Providers>
        <SWRConfig
          value={{
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
          }}
        >
          <html lang="ja">
            <body className={inter.className} style={{ minHeight: "100vh", color: "#343434" }}>
              <Header />
              {children}
              <FooterNav />
            </body>
          </html>
        </SWRConfig>
      </Providers>
    </RecoilRoot>
  );
}
