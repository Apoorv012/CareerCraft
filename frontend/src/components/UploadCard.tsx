import { UploadCloud } from "lucide-react";

export default function UploadCard() {
  return (
    <div className="w-full rounded-xl border border-dashed border-gray-300 bg-white p-6 text-center hover:border-primary transition">
      <div className="flex flex-col items-center gap-4">
        <UploadCloud className="h-10 w-10 text-primary" />

        <div>
          <p className="text-lg font-semibold text-gray-800">
            Upload your resume
          </p>
          <p className="text-sm text-gray-500">
            Drag & drop your file here or click to browse
          </p>
        </div>

        <div className="text-xs text-gray-400">
          Supported formats: PDF, DOCX · Max size: 5MB
        </div>

        <button
          type="button"
          className="mt-4 rounded-md bg-primary px-6 py-2 text-sm font-medium text-white hover:opacity-90 transition"
        >
          Upload Resume
        </button>
      </div>
    </div>
  );
}
