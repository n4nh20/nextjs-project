"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon, VideoIcon } from "@radix-ui/react-icons";
import { UserButton } from "@/components/shared/UserButton";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between border-b px-4">
      <div className="flex w-full max-w-md items-center gap-2">
        <Input
          type="search"
          placeholder="Tìm kiếm video..."
          className="w-full"
        />
        <Button size="icon" variant="ghost">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost">
          <Link href="/upload">
            <VideoIcon className="mr-2 h-5 w-5" />
            Tải lên
          </Link>
        </Button>
        <UserButton />
      </div>
    </nav>
  );
}
