import { UploadForm } from "@/components/shared/UploadForm";

export default function UploadPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-8 text-2xl font-bold">Tải lên video mới</h1>
      <UploadForm />
    </div>
  );
}
