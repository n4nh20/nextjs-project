import { VideoCard } from "@/components/shared/VideoCard";

const videos = [
  {
    id: "1",
    title: "Xây dựng ứng dụng Next.js với TypeScript và Tailwind CSS",
    thumbnailUrl: "https://i.ytimg.com/vi/1234567890/maxresdefault.jpg",
    views: 1234,
    createdAt: new Date("2024-03-10"),
    user: {
      id: "user1",
      name: "Nguyễn Văn A",
      image: "https://github.com/shadcn.png",
    },
    _count: {
      likes: 42,
    },
  },
  {
    id: "2",
    title: "Tìm hiểu về React Server Components và Client Components",
    thumbnailUrl: "https://i.ytimg.com/vi/0987654321/maxresdefault.jpg",
    views: 5678,
    createdAt: new Date("2024-03-09"),
    user: {
      id: "user2",
      name: "Trần Thị B",
      image: "https://github.com/radix-ui.png",
    },
    _count: {
      likes: 89,
    },
  },
  {
    id: "3",
    title: "Hướng dẫn sử dụng Prisma với MongoDB trong Next.js",
    thumbnailUrl: "https://i.ytimg.com/vi/1357924680/maxresdefault.jpg",
    views: 9012,
    createdAt: new Date("2024-03-08"),
    user: {
      id: "user1",
      name: "Nguyễn Văn A",
      image: "https://github.com/shadcn.png",
    },
    _count: {
      likes: 123,
    },
  },
  {
    id: "4",
    title: "Authentication trong Next.js với NextAuth.js",
    thumbnailUrl: "https://i.ytimg.com/vi/2468013579/maxresdefault.jpg",
    views: 3456,
    createdAt: new Date("2024-03-07"),
    user: {
      id: "user3",
      name: "Lê Văn C",
      image: "https://github.com/vercel.png",
    },
    _count: {
      likes: 67,
    },
  },
];

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
}
