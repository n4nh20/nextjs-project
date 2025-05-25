"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExitIcon, PersonIcon } from "@radix-ui/react-icons";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

export function UserButton() {
  const { data: session, status } = useSession();

  console.log("Session Status:", status);
  console.log("Session Data:", session);

  // Đang loading
  if (status === "loading") {
    return <Skeleton className="h-9 w-9 rounded-full" />;
  }

  // Chưa đăng nhập
  if (status === "unauthenticated") {
    return (
      <Button onClick={() => signIn()} variant="outline">
        Đăng nhập
      </Button>
    );
  }

  // Đã đăng nhập
  if (!session) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={session.user.image ?? ""}
              alt={session.user.name ?? ""}
            />
            <AvatarFallback>
              {session.user.name?.charAt(0).toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {session.user.name && (
              <p className="font-medium">{session.user.name}</p>
            )}
            {session.user.email && (
              <p className="w-[200px] truncate text-sm text-muted-foreground">
                {session.user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/profile/${session.user.id}`}>
            <PersonIcon className="mr-2 h-4 w-4" />
            Trang cá nhân
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-destructive focus:bg-destructive focus:text-destructive-foreground"
          onClick={() => signOut()}
        >
          <ExitIcon className="mr-2 h-4 w-4" />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
