"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-sm flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Đăng nhập vào tài khoản
          </h1>
          <p className="text-sm text-muted-foreground">
            Chọn phương thức đăng nhập bên dưới
          </p>
        </div>
        <div className="grid gap-2">
          <Button
            variant="outline"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
              })
            }
          >
            <Image
              src="/google.svg"
              width={20}
              height={20}
              alt="Google"
              className="mr-2"
            />
            Đăng nhập với Google
          </Button>
        </div>
      </div>
    </div>
  );
}
