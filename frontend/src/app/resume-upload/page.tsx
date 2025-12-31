import UploadCard from "@/components/UploadCard";
import InstructionCard from "@/components/InstructionCard";

export default function ResumeUploadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Resume Upload
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Upload your resume to receive AI-powered career insights
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <UploadCard />
        <InstructionCard />
      </div>

      {/* Primary Action */}
      <div className="mt-12 flex justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700"
        >
          Analyze Resume
        </button>
      </div>
    </div>
  );
}
