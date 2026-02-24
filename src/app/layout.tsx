import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "K22 Transport | Vehicle Rentals",
  description:
    "Food delivery vehicles, personal use rentals, and taxi-ready sedans & SUVs.",
};

const navLink =
  "rounded-full px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/k22-logo.png"
                alt="K22 Transport"
                width={140}
                height={46}
                priority
                className="h-auto w-auto"
              />
            </Link>

            <nav className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
              <Link href="/" className={navLink}>
                Home
              </Link>
              <Link href="/fleet" className={navLink}>
                Fleet
              </Link>
              <Link href="/choose-us" className={navLink}>
                Choose Us
              </Link>
              <Link
                href="/enquiry"
                className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition"
              >
                Enquire
              </Link>
            </nav>
          </div>
        </header>

        {/* Page */}
        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm text-white/70">
                  © {new Date().getFullYear()} K22 Transport. All rights reserved.
                </p>
                <p className="text-xs text-white/50">
                  Food delivery vehicles • Personal rentals • Taxi-ready sedans & SUVs
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:items-end">
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/fleet"
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
                  >
                    View Fleet
                  </Link>
                  <Link
                    href="/choose-us"
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
                  >
                    Choose Us
                  </Link>
                  <Link
                    href="/enquiry"
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
                  >
                    Make an Enquiry
                  </Link>
                </div>

                {/* UPDATED: clickable + bigger Azdello logo */}
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <span className="font-semibold text-white/70">Design by:</span>

                  <Link
                    href="https://azdello.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Azdello"
                    className="inline-flex items-center"
                  >
                    <Image
                      src="/azdello-logo.png"
                      alt="Azdello"
                      width={150}
                      height={40}
                      className="h-8 w-auto opacity-95 hover:opacity-100 transition sm:h-9"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}