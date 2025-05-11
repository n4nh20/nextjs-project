# NextJS + TailwindCSS + MongoDB Project

Dự án web hiện đại sử dụng:
- NextJS cho framework frontend
- TailwindCSS cho styling
- MongoDB cho cơ sở dữ liệu

## Tính năng

- Sử dụng Next.js App Router
- Styling với TailwindCSS 4.0
- Kết nối và tương tác với MongoDB
- API Routes cho backend

## Cài đặt

1. Clone dự án
   ```bash
   git clone <repository-url>
   cd nextjs-project
   ```

2. Cài đặt dependencies
   ```bash
   cd frontend
   npm install
   ```

3. Thiết lập biến môi trường
   ```bash
   cp src/env.example .env.local
   ```
   Sau đó chỉnh sửa file `.env.local` với thông tin của bạn.

## Chạy dự án

1. Chạy dự án ở chế độ development
   ```bash
   npm run dev
   ```
   
   Truy cập [http://localhost:3000](http://localhost:3000) để xem dự án.

2. Build dự án
   ```bash
   npm run build
   ```

3. Chạy dự án ở chế độ production
   ```bash
   npm start
   ```

## Cấu trúc dự án

```
src/
├── app/               # App Router pages và layouts
│   ├── api/           # API routes
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Trang chủ
├── components/        # UI components có thể tái sử dụng
│   ├── ui/            # Basic UI components
│   └── features/      # Feature-specific components
├── lib/               # Utility functions và shared code
├── models/            # Data models và schemas
├── hooks/             # Custom React hooks
└── styles/            # Custom style definitions
```

## Làm việc với API

### API Routes

- `GET /api/users` - Lấy danh sách người dùng
- `POST /api/users` - Tạo người dùng mới
- `GET /api/users/[id]` - Lấy thông tin của một người dùng
- `PUT /api/users/[id]` - Cập nhật thông tin người dùng
- `DELETE /api/users/[id]` - Xóa người dùng

## Công nghệ sử dụng

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Giấy phép

MIT
