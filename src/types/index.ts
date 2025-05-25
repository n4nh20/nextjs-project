export interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  sourceCode: string | null;
  tags: string[];
  views: number;
  user: User;
}
