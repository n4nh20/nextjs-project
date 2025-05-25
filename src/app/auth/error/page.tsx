"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  let errorMessage = "Đã xảy ra lỗi trong quá trình xác thực.";

  switch (error) {
    case "Configuration":
      errorMessage = "Có lỗi trong cấu hình xác thực.";
      break;
    case "AccessDenied":
      errorMessage = "Bạn không có quyền truy cập vào tài nguyên này.";
      break;
    case "Verification":
      errorMessage = "Liên kết xác thực không hợp lệ hoặc đã hết hạn.";
      break;
    case "OAuthSignin":
      errorMessage = "Lỗi khi bắt đầu quá trình đăng nhập OAuth.";
      break;
    case "OAuthCallback":
      errorMessage = "Lỗi khi nhận phản hồi từ nhà cung cấp OAuth.";
      break;
    case "OAuthCreateAccount":
      errorMessage = "Không thể tạo tài khoản OAuth.";
      break;
    case "EmailCreateAccount":
      errorMessage = "Không thể tạo tài khoản email.";
      break;
    case "Callback":
      errorMessage = "Lỗi trong quá trình xử lý callback.";
      break;
    case "EmailSignin":
      errorMessage = "Lỗi khi gửi email đăng nhập.";
      break;
    case "CredentialsSignin":
      errorMessage = "Thông tin đăng nhập không chính xác.";
      break;
    case "SessionRequired":
      errorMessage = "Vui lòng đăng nhập để truy cập trang này.";
      break;
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-center text-2xl font-bold text-destructive">
            Lỗi Xác Thực
          </h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">{errorMessage}</p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/sign-in">Thử lại</Link>
            </Button>
            <Button asChild>
              <Link href="/">Về trang chủ</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
