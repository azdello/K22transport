import Link from "next/link";

const fleet = [
  {
    title: "Food Delivery Vehicles",
    desc: "Reliable options suitable for delivery work (subject to availability).",
    tags: ["Efficient", "Reliable", "Flexible"],
  },
  {
    title: "Personal Use Vehicles",
    desc: "Daily drivers for commuting, errands, and personal travel.",
    tags: ["Comfort", "Convenient", "Simple"],
  },
  {
    title: "Taxi Sedans",
    desc: "Taxi-ready sedans (subject to requirements and availability).",
    tags: ["Sedan", "Taxi-ready", "Professional"],
  },
  {
    title: "Taxi SUVs",
    desc: "Taxi-ready SUVs for extra space and comfort.",
    tags: ["SUV", "Taxi-ready", "Spacious"],
  },
];

export default function FleetPage() {
  return (
    <div className="space-y-10 sm:space-y-14">
      {/* Intro */}
      <section className="space-y-3">
        <h1 className="text-2xl font-extrabold sm:text-4xl">Fleet</h1>
        <p className="max-w-2xl text-sm text-white/70 sm:text-base">
          Browse our categories below. Choose what fits your needs and send an enquiry with your
          preferred dates. We’ll confirm availability ASAP.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/enquiry"
            className="inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition sm:w-auto"
          >
            Make an Enquiry
          </Link>
          <Link
            href="/choose-us"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition sm:w-auto"
          >
            Why Choose Us
          </Link>
        </div>
      </section>

      {/* Fleet cards */}
      <section className="grid gap-4 sm:grid-cols-2">
        {fleet.map((v) => (
          <div
            key={v.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-lg font-bold sm:text-xl">{v.title}</h2>
            <p className="mt-2 text-sm text-white/70">{v.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {v.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <Link
                href={`/enquiry?type=${encodeURIComponent(v.title)}`}
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-white/90 transition sm:w-auto"
              >
                Enquire about this
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* What’s included */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">What’s included</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Good quality vehicles",
              desc: "Clean, reliable vehicles ready to drive.",
            },
            {
              title: "Unlimited kms",
              desc: "Drive without worrying about mileage.",
            },
            {
              title: "Friendly staff",
              desc: "Clear support and fast responses.",
            },
            {
              title: "Convenient location",
              desc: "Simple pickup process and helpful guidance.",
            },
            {
              title: "Customer focused",
              desc: "We prioritise satisfaction and smooth bookings.",
            },
            {
              title: "Easy enquiries",
              desc: "Quick form with dates + vehicle type.",
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

      {/* Booking tips */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold sm:text-2xl">Booking tips</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Have dates ready",
              desc: "Sharing start/end dates helps us confirm faster.",
            },
            {
              title: "Mention the purpose",
              desc: "Delivery, personal use, or taxi — note it in your enquiry.",
            },
            {
              title: "Taxi requirements",
              desc: "If taxi use, tell us early so we can guide requirements.",
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

      {/* CTA */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold sm:text-xl">Ready to book?</h3>
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