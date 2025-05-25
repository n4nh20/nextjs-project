"use client";

import { Navbar } from "@/components/shared/Navbar";
import { Sidebar } from "@/components/shared/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <Navbar />
        <main className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
