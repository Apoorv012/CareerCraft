export default function InstructionCard() {
  return (
    <div className="rounded-xl bg-gray-50 p-6">
      <h3 className="mb-3 text-base font-semibold text-gray-800">
        Tips for best results
      </h3>

      <ul className="space-y-2 text-sm text-gray-600">
        <li>• Upload your most recent resume</li>
        <li>• Use clear headings and consistent formatting</li>
        <li>• Avoid images or tables for better ATS parsing</li>
        <li>• Ensure content is readable and concise</li>
      </ul>
    </div>
  );
}
