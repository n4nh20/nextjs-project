"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function UploadForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sourceCode, setSourceCode] = useState("");
  const { startUpload, isUploading } = useUploadThing("videoUploader");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput =
      form.querySelector<HTMLInputElement>('input[type="file"]');
    const files = fileInput?.files;

    if (!files?.[0]) return;

    const uploadRes = await startUpload([files[0]]);
    if (!uploadRes?.[0]) return;

    const response = await fetch("/api/videos", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        sourceCode,
        url: uploadRes[0].url,
      }),
    });

    if (!response.ok) return;

    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="title">Tiêu đề</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Mô tả</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sourceCode">Source code (không bắt buộc)</Label>
        <Input
          id="sourceCode"
          type="url"
          value={sourceCode}
          onChange={(e) => setSourceCode(e.target.value)}
          placeholder="https://github.com/username/repo"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="video">Video</Label>
        <Input id="video" type="file" accept="video/*" required />
      </div>

      <Button type="submit" disabled={isUploading}>
        {isUploading ? "Đang tải lên..." : "Tải lên"}
      </Button>
    </form>
  );
}
