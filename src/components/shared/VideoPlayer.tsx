import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { type PrismaClient } from "@prisma/client";
import { HeartIcon } from "@radix-ui/react-icons";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import Link from "next/link";

type Video = PrismaClient["video"]["payload"]["create"];
type User = PrismaClient["user"]["payload"]["create"];

interface VideoPlayerProps {
  video: Video & {
    user: User;
  };
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  return (
    <div className="space-y-4">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
        <video
          src={video.url}
          controls
          className="h-full w-full"
          poster={video.thumbnailUrl}
        />
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">{video.title}</h1>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href={`/profile/${video.userId}`}>
                <Avatar>
                  <AvatarImage
                    src={video.user.image ?? ""}
                    alt={video.user.name ?? ""}
                  />
                  <AvatarFallback>
                    {video.user.name?.charAt(0).toUpperCase() ?? "U"}
                  </AvatarFallback>
                </Avatar>
              </Link>
              <div>
                <Link
                  href={`/profile/${video.userId}`}
                  className="font-semibold hover:underline"
                >
                  {video.user.name}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {video.views} lượt xem •{" "}
                  {formatDistanceToNow(video.createdAt, {
                    addSuffix: true,
                    locale: vi,
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <HeartIcon className="h-5 w-5" />
              </Button>
              {video.sourceCode && (
                <Button asChild variant="outline">
                  <Link href={video.sourceCode} target="_blank">
                    Source code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-4">
          <p className="whitespace-pre-wrap">{video.description}</p>
        </div>
      </div>
    </div>
  );
}
