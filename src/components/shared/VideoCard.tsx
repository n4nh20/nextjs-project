"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeartIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  views: number;
  createdAt: Date;
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
  _count: {
    likes: number;
  };
}

export function VideoCard({
  id,
  title,
  thumbnailUrl,
  views,
  createdAt,
  user,
  _count,
}: VideoCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Link href={`/watch/${id}`}>
          <div className="aspect-video relative bg-muted">
            <img
              src={thumbnailUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex gap-3">
          <Link href={`/profile/${user.id}`}>
            <Avatar className="h-9 w-9">
              <AvatarImage src={user.image ?? ""} alt={user.name ?? ""} />
              <AvatarFallback>
                {user.name?.charAt(0).toUpperCase() ?? "U"}
              </AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1 space-y-1">
            <Link href={`/watch/${id}`}>
              <h3 className="font-medium leading-tight line-clamp-2">
                {title}
              </h3>
            </Link>
            <div className="text-sm text-muted-foreground space-y-1">
              <Link href={`/profile/${user.id}`}>
                <p className="hover:text-foreground transition-colors">
                  {user.name}
                </p>
              </Link>
              <p>
                {views.toLocaleString("vi-VN")} lượt xem •{" "}
                {formatDistanceToNow(createdAt, {
                  locale: vi,
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="ghost" size="sm" className="ml-auto gap-1">
          <HeartIcon />
          {_count.likes}
        </Button>
      </CardFooter>
    </Card>
  );
}
