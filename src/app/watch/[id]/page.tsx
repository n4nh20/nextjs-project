import { VideoPlayer } from "@/components/shared/VideoPlayer";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface WatchPageProps {
  params: {
    id: string;
  };
}

export default async function WatchPage({ params }: WatchPageProps) {
  const video = await prisma.video.findUnique({
    where: {
      id: params.id,
    },
    include: {
      user: true,
    },
  });

  if (!video) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl">
      <VideoPlayer video={video} />
    </div>
  );
}
