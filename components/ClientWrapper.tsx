"use client";
import ProgressBar from "@/components/progress-bar";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}
