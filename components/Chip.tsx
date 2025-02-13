import Link from "next/link";

interface ChipProps {
  label: string;
  isSelected: boolean;
}

export default function Chip({ label, isSelected }: ChipProps) {
  
  return (
    <Link
      href={`?location=${label}`}
      className={`px-4 py-1 rounded-full border whitespace-nowrap capitalize ${
        isSelected ? "bg-amber-900 text-white" : "bg-gray-200 text-gray-700"
      } hover:bg-orange-400 hover:text-white transition-colors`}
    >
      {label}
    </Link>
  );
}
