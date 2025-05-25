# Code Sharing Platform

Nền tảng chia sẻ video và source code về lập trình.

## Tính năng

- Đăng nhập với Google và GitHub
- Tải lên video và source code
- Xem video và source code
- Thích video
- Xem lịch sử video đã xem
- Xem danh sách video đã thích
- Trang cá nhân với danh sách video đã đăng

## Công nghệ sử dụng

- Next.js 14 với App Router
- TypeScript
- TailwindCSS
- Shadcn/ui
- Prisma
- MongoDB
- NextAuth.js
- Uploadthing

## Cài đặt

1. Clone repository:
```bash
git clone https://github.com/your-username/code-sharing-platform.git
cd code-sharing-platform
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Tạo file .env và thêm các biến môi trường:
```env
# MongoDB
DATABASE_URL="your_mongodb_url"

# Auth providers
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
GITHUB_ID="your_github_client_id"
GITHUB_SECRET="your_github_client_secret"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_nextauth_secret"

# UploadThing
UPLOADTHING_SECRET="your_uploadthing_secret"
UPLOADTHING_APP_ID="your_uploadthing_app_id"
```

4. Khởi tạo database:
```bash
npx prisma db push
```

5. Chạy ứng dụng:
```bash
npm run dev
```

## Đóng góp

Mọi đóng góp đều được hoan nghênh! Vui lòng tạo issue hoặc pull request.
