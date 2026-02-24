import { Suspense } from "react";
import EnquiryClient from "./EnquiryClient";

export default function EnquiryPage() {
  return (
    <Suspense fallback={<div className="text-white/60">Loading…</div>}>
      <EnquiryClient />
    </Suspense>
  );
}