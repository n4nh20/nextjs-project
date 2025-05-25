"use client";

import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  PersonIcon,
  HeartIcon,
  ClockIcon,
} from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const links = [
    {
      href: "/",
      label: "Trang chủ",
      icon: HomeIcon,
    },
    ...(session?.user
      ? [
          {
            href: `/profile/${session.user.id}`,
            label: "Kênh của bạn",
            icon: PersonIcon,
          },
          {
            href: "/liked",
            label: "Video đã thích",
            icon: HeartIcon,
          },
          {
            href: "/history",
            label: "Lịch sử xem",
            icon: ClockIcon,
          },
        ]
      : []),
  ];

  return (
    <aside className="flex w-56 flex-col gap-2 border-r p-4">
      {links.map((link) => (
        <Button
          key={link.href}
          asChild
          variant={pathname === link.href ? "default" : "ghost"}
          className="justify-start"
        >
          <Link href={link.href}>
            <link.icon className="mr-2 h-5 w-5" />
            {link.label}
          </Link>
        </Button>
      ))}
    </aside>
  );
}
