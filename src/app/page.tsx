import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      {/* HERO */}
      <section className="hero px-4 sm:px-0">
        <span className="heroPill inline-flex max-w-full whitespace-normal text-center leading-snug">
          K22 Transport • Vehicle Rentals
        </span>

        <h1 className="h1 text-balance break-words text-3xl sm:text-4xl md:text-5xl">
          Work-ready rentals, simple booking
        </h1>

        <p className="lead max-w-3xl mx-auto text-pretty text-sm sm:text-base">
          Vehicle rentals for food delivery, personal use, and taxi-ready sedans/SUVs
          across Victoria. Choose your dates, select a vehicle type, and we’ll confirm
          availability ASAP.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full">
          <Link href="/enquiry" className="btnPrimary w-full sm:w-auto text-center">
            Check availability
          </Link>
          <Link href="/fleet" className="btnGhost w-full sm:w-auto text-center">
            View fleet
          </Link>
          <a href="tel:0430277558" className="btnGhost w-full sm:w-auto text-center">
            Call 0430 277 558
          </a>
        </div>
      </section>

      {/* TRUST STRIP (new look, same content) */}
      <section className="mt-8 sm:mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden">
          <div className="p-5 sm:p-6 flex gap-4">
            <div className="shrink-0 h-10 w-1 rounded-full bg-amber-400/80" />
            <div className="min-w-0">
              <span className="tagGold text-xs font-semibold opacity-90">Pickup</span>
              <div className="mt-1 text-lg sm:text-xl font-extrabold tracking-tight text-white break-words">
                Cairnlea, VIC
              </div>
              <div className="mt-1 text-sm leading-relaxed text-white/60">
                Convenient pickup location for Melbourne’s west.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden">
          <div className="p-5 sm:p-6 flex gap-4">
            <div className="shrink-0 h-10 w-1 rounded-full bg-amber-400/80" />
            <div className="min-w-0">
              <span className="tagGold text-xs font-semibold opacity-90">Response</span>
              <div className="mt-1 text-lg sm:text-xl font-extrabold tracking-tight text-white break-words">
                Fast confirmation
              </div>
              <div className="mt-1 text-sm leading-relaxed text-white/60">
                We’ll contact you to confirm availability and next steps.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden">
          <div className="p-5 sm:p-6 flex gap-4">
            <div className="shrink-0 h-10 w-1 rounded-full bg-amber-400/80" />
            <div className="min-w-0">
              <span className="tagGold text-xs font-semibold opacity-90">Options</span>
              <div className="mt-1 text-lg sm:text-xl font-extrabold tracking-tight text-white break-words">
                Multiple categories
              </div>
              <div className="mt-1 text-sm leading-relaxed text-white/60">
                Personal, food delivery, and taxi-ready options.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US (boxed section stays, inner cards become softer “feature panels”) */}
      <section className="mt-8 sm:mt-10 card">
        <div className="cardBody">
          <span className="tagGold text-xs font-semibold opacity-90">Benefits</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-white text-balance">
            Why choose K22 Transport
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/65 leading-relaxed max-w-3xl text-pretty">
            We focus on a smooth booking experience and reliable vehicle categories
            for everyday drivers and working professionals. Tell us what you need and
            we’ll help you lock in the right option.
          </p>

          <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_160px_at_20%_-20%,rgba(245,158,11,0.12),transparent_60%)]" />
              <h3 className="relative text-base sm:text-lg font-extrabold text-white">
                All-inclusive approach
              </h3>
              <p className="relative mt-2 text-sm text-white/60 leading-relaxed text-pretty">
                Straightforward hire options designed to keep you on the road with
                minimal hassle.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_160px_at_20%_-20%,rgba(245,158,11,0.12),transparent_60%)]" />
              <h3 className="relative text-base sm:text-lg font-extrabold text-white">
                Flexible terms
              </h3>
              <p className="relative mt-2 text-sm text-white/60 leading-relaxed text-pretty">
                Short-term and long-term hire options depending on your needs and
                availability.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_160px_at_20%_-20%,rgba(245,158,11,0.12),transparent_60%)]" />
              <h3 className="relative text-base sm:text-lg font-extrabold text-white">
                Category match
              </h3>
              <p className="relative mt-2 text-sm text-white/60 leading-relaxed text-pretty">
                Select the right category — personal use, food delivery, or taxi-ready.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_160px_at_20%_-20%,rgba(245,158,11,0.12),transparent_60%)]" />
              <h3 className="relative text-base sm:text-lg font-extrabold text-white">
                Fast response
              </h3>
              <p className="relative mt-2 text-sm text-white/60 leading-relaxed text-pretty">
                Submit your enquiry and we’ll get back to confirm availability as
                soon as possible.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/enquiry" className="btnPrimary w-full sm:w-auto text-center">
              Make an enquiry
            </Link>
            <a
              href="mailto:k22transport@gmail.com"
              className="btnGhost w-full sm:w-auto text-center"
            >
              Email us
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (new look, same content) */}
      <section className="mt-8 sm:mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden">
        <div className="p-6 sm:p-8 relative">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_260px_at_50%_-30%,rgba(245,158,11,0.10),transparent_60%)]" />
          <div className="relative">
            <span className="tagGold text-xs font-semibold opacity-90">How it works</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-white text-balance">
              Simple booking process
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/65 leading-relaxed max-w-3xl text-pretty">
              Three quick steps from enquiry to pickup — clear, efficient, and fast.
            </p>

            <div className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="tagGold text-xs font-semibold opacity-90">Step 1</span>
                  <div className="h-px flex-1 bg-white/10 md:hidden" />
                </div>
                <h3 className="mt-3 text-base sm:text-lg font-extrabold text-white">
                  Submit your enquiry
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed text-pretty">
                  Choose pickup/return dates and select a vehicle category.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="tagGold text-xs font-semibold opacity-90">Step 2</span>
                  <div className="h-px flex-1 bg-white/10 md:hidden" />
                </div>
                <h3 className="mt-3 text-base sm:text-lg font-extrabold text-white">
                  We confirm availability
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed text-pretty">
                  We contact you to confirm the best option and next steps.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="tagGold text-xs font-semibold opacity-90">Step 3</span>
                  <div className="h-px flex-1 bg-white/10 md:hidden" />
                </div>
                <h3 className="mt-3 text-base sm:text-lg font-extrabold text-white">
                  Pickup in Cairnlea
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed text-pretty">
                  Collect the vehicle and you’re ready to go.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/enquiry" className="btnPrimary w-full sm:w-auto text-center">
                Start enquiry
              </Link>
              <Link href="/fleet" className="btnGhost w-full sm:w-auto text-center">
                Browse fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET PREVIEW (boxed cards remain; hierarchy improvements inside) */}
      <section className="mt-8 sm:mt-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="min-w-0">
            <span className="tagGold text-xs font-semibold opacity-90">Fleet</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-white text-balance">
              Vehicle categories available
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/65 leading-relaxed max-w-2xl text-pretty">
              Choose a category and send an enquiry — we’ll match you to what’s available.
            </p>
          </div>

          <Link href="/fleet" className="luxLink w-fit">
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-4 sm:gap-6 md:grid-cols-2">
          <div className="card">
            <div className="cardBody">
              <span className="tagGold text-xs font-semibold opacity-90">Personal</span>
              <div className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white break-words">
                Hatchback
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/60">
                Reliable daily driving for commuting, errands, and student use.
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col xs:flex-row gap-2 xs:items-center xs:justify-between">
                <Link href="/enquiry" className="luxLink">
                  Enquire now →
                </Link>
                <span className="text-xs text-white/55">Fast response</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardBody">
              <span className="tagGold text-xs font-semibold opacity-90">Personal</span>
              <div className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white break-words">
                Sedan
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/60">
                Comfortable choice for longer trips and extra boot space.
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col xs:flex-row gap-2 xs:items-center xs:justify-between">
                <Link href="/enquiry" className="luxLink">
                  Enquire now →
                </Link>
                <span className="text-xs text-white/55">Pickup Cairnlea</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardBody">
              <span className="tagGold text-xs font-semibold opacity-90">Taxi</span>
              <div className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white break-words">
                Taxi-ready options
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/60">
                Taxi sedan and taxi SUV options — tell us “Taxi” in your message.
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col xs:flex-row gap-2 xs:items-center xs:justify-between">
                <Link href="/enquiry" className="luxLink">
                  Enquire now →
                </Link>
                <span className="text-xs text-white/55">Confirm availability</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardBody">
              <span className="tagGold text-xs font-semibold opacity-90">Premium</span>
              <div className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white break-words">
                SUV &amp; 7 Seaters
              </div>
              <div className="mt-2 text-sm leading-relaxed text-white/60">
                Extra space and comfort for families and long-term hire.
              </div>
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col xs:flex-row gap-2 xs:items-center xs:justify-between">
                <Link href="/enquiry" className="luxLink">
                  Enquire now →
                </Link>
                <span className="text-xs text-white/55">Limited spots</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mt-8 sm:mt-10 card">
        <div className="cardBody">
          <span className="tagGold text-xs font-semibold opacity-90">Booking</span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-black tracking-tight text-white text-balance">
            Send your dates — we’ll confirm availability
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/65 leading-relaxed max-w-3xl text-pretty">
            Use the enquiry form to select pickup and return dates, vehicle type, and your best contact details.
            We’ll respond as soon as possible with the next step.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/enquiry" className="btnPrimary w-full sm:w-auto text-center">
              Booking enquiry
            </Link>
            <a href="tel:0430277558" className="btnGhost w-full sm:w-auto text-center">
              Call 0430 277 558
            </a>
            <a
              href="mailto:k22transport@gmail.com"
              className="btnGhost w-full sm:w-auto text-center break-all"
            >
              k22transport@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}