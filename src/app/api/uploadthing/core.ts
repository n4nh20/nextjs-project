import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getServerSession } from "next-auth";

const f = createUploadthing();

export const ourFileRouter = {
  videoUploader: f({ video: { maxFileSize: "512MB" } })
    .middleware(async () => {
      const session = await getServerSession();
      if (!session) throw new Error("Unauthorized");
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { uploadedBy: metadata.userId, url: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
