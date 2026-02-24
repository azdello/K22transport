import Link from "next/link";

export default function ChooseUsPage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 sm:p-10">
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(ellipse_at_top,rgba(250,204,21,0.18),transparent_60%)]" />
        <div className="relative space-y-4 sm:space-y-5">
          <h1 className="text-2xl font-extrabold sm:text-4xl">Why choose K22 Transport</h1>
          <p className="max-w-2xl text-sm text-white/70 sm:text-base">
            We focus on a smooth booking experience, reliable vehicles, and service that puts the
            customer first.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/enquiry"
              className="inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition sm:w-auto"
            >
              Make an Enquiry
            </Link>
            <Link
              href="/fleet"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition sm:w-auto"
            >
              View Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">What you can expect</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Good quality vehicles",
              desc: "We keep our vehicles clean, reliable, and ready to drive.",
            },
            {
              title: "Unlimited kms",
              desc: "Drive freely without worrying about mileage limits.",
            },
            {
              title: "Friendly staff",
              desc: "Clear communication and support before and during your rental.",
            },
            {
              title: "Convenient location",
              desc: "Easy pickup process and helpful guidance for a smooth start.",
            },
            {
              title: "Customer focused business",
              desc: "We prioritise customer satisfaction and a stress-free booking experience.",
            },
            {
              title: "Fast confirmations",
              desc: "Send dates + vehicle type and we’ll confirm availability ASAP.",
            },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm font-semibold">{x.title}</p>
              <p className="mt-2 text-sm text-white/70">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Simple process */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">A simple booking process</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { step: "1", title: "Enquire", desc: "Send dates, vehicle type, and contact details." },
            { step: "2", title: "Confirm", desc: "We confirm availability and next steps ASAP." },
            { step: "3", title: "Pick up", desc: "We provide pickup details so you can drive away." },
          ].map((x) => (
            <div
              key={x.step}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-yellow-400 text-sm font-extrabold text-black">
                  {x.step}
                </span>
                <p className="text-sm font-semibold">{x.title}</p>
              </div>
              <p className="mt-3 text-sm text-white/70">{x.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold sm:text-xl">Booking Enquiries</h3>
            <p className="mt-1 text-sm text-white/70">
              Send your dates and vehicle type — we’ll confirm availability ASAP.
            </p>
          </div>

          <Link
            href="/enquiry"
            className="inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition sm:w-auto"
          >
            Make an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}