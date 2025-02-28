"use client";
import "@/styles/globals.css"; 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CacheProvider } from "@emotion/react"; // ✅
import { Toaster } from "sonner";
import createEmotionCache from "@/lib/utils/emotionCache";
import Providers from "@/lib/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

// Create client-side Emotion cache
const clientSideEmotionCache = createEmotionCache();

// export const metadata: Metadata = {
//   title: "PH Health Care",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <CacheProvider value={clientSideEmotionCache}>
            <Toaster position="top-center" />
            {children}
          </CacheProvider>
        </body>
      </html>
    </Providers>
  );
}
