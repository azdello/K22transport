import Link from "next/link";

export default async function EnquiryConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-extrabold sm:text-5xl">Enquiry sent ✅</h1>
        <p className="max-w-2xl text-sm text-white/70 sm:text-base">
          Thanks — we’ve received your booking enquiry{type ? ` for ${type}` : ""}.
          We’ll contact you ASAP to confirm availability and next steps.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/fleet"
          className="rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition"
        >
          View Fleet
        </Link>
        <Link
          href="/enquiry"
          className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
        >
          Submit Another Enquiry
        </Link>
        <Link
          href="/"
          className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}