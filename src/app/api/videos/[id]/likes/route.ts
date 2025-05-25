import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

interface RouteParams {
  params: {
    id: string;
  };
}

interface PrismaError {
  code: string;
}

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const like = await prisma.like.create({
      data: {
        userId: session.user.id,
        videoId: params.id,
      },
    });

    return NextResponse.json(like);
  } catch (error) {
    if ((error as PrismaError).code === "P2002") {
      return new NextResponse("Video already liked", { status: 400 });
    }
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.like.delete({
      where: {
        userId_videoId: {
          userId: session.user.id,
          videoId: params.id,
        },
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    if ((error as PrismaError).code === "P2025") {
      return new NextResponse("Video not liked", { status: 400 });
    }
    return new NextResponse("Internal error", { status: 500 });
  }
}
