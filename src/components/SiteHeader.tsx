import Image from "next/image";
import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/fleet" },
  { label: "Enquiry", href: "/enquiry" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="K22 Transport" width={170} height={52} priority />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="nav-link">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:0430277558" className="hidden md:inline-flex btn-ghost">
            Call 0430 277 558
          </a>
          <Link href="/enquiry" className="btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}