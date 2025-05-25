import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const video = await prisma.video.update({
      where: {
        id: params.id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(video);
  } catch {
    return new NextResponse("Internal error", { status: 500 });
  }
}
