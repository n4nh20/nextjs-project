import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layouts/MainLayout";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Sharing Platform",
  description: "Nền tảng chia sẻ video và source code về lập trình",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="dark" suppressHydrationWarning>
      <body className={cn(inter.className, "bg-background text-foreground")}>
        <Providers>
          <MainLayout>{children}</MainLayout>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
