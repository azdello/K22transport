"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function EnquiryClient() {
  const params = useSearchParams();
  const router = useRouter();

  const prefillType = useMemo(() => params.get("type") ?? "", [params]);

  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      vehicleType: String(formData.get("vehicleType") || "").trim(),
      startDate: String(formData.get("startDate") || "").trim(),
      endDate: String(formData.get("endDate") || "").trim(),
      notes: String(formData.get("notes") || "").trim(),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      // Redirect to confirmation page (keep the type in URL for a nice message)
      const type = encodeURIComponent(payload.vehicleType || prefillType || "");
      router.push(`/enquiry/confirmation${type ? `?type=${type}` : ""}`);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    } finally {
      // keep "sending" until redirect happens; if error it'll show error state
      if (status !== "error") setStatus("idle");
    }
  }

  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-2xl font-extrabold sm:text-4xl">Booking Enquiry</h1>
        <p className="max-w-2xl text-sm text-white/70 sm:text-base">
          {/* Keep your existing enquiry intro text */}
          Enter your details and preferred dates. We’ll confirm availability ASAP.
        </p>
      </section>

      {/* On mobile: 1 column. On desktop: form + info side-by-side */}
      <section className="grid gap-6 lg:grid-cols-5">
        {/* FORM */}
        <div className="lg:col-span-3">
          {/* White card stays, but inputs are clearly styled */}
          <div className="rounded-3xl border border-white/10 bg-white p-6 sm:p-8 text-black">
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name">
                  <input
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="Your name"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </Field>

                <Field label="Phone Number">
                  <input
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="04xx xxx xxx"
                    name="phone"
                    autoComplete="tel"
                    required
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email (optional)">
                  <input
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none focus:ring-2 focus:ring-yellow-400"
                    placeholder="you@email.com"
                    name="email"
                    autoComplete="email"
                  />
                </Field>

                <Field label="Vehicle Type">
                  <select
                    defaultValue={prefillType || ""}
                    name="vehicleType"
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  >
                    <option value="" disabled>
                      Select a type
                    </option>
                    <option>Food Delivery Vehicles</option>
                    <option>Personal Use Vehicles</option>
                    <option>Taxi Sedans</option>
                    <option>Taxi SUVs</option>
                  </select>
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Start Date">
                  <input
                    type="date"
                    name="startDate"
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </Field>

                <Field label="End Date">
                  <input
                    type="date"
                    name="endDate"
                    className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                </Field>
              </div>

              <Field label="Notes (optional)">
                <textarea
                  name="notes"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Anything we should know? (e.g. taxi use, preferred vehicle, pickup suburb)"
                />
              </Field>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition disabled:opacity-60"
              >
                {status === "sending" ? "Submitting…" : "Submit Enquiry"}
              </button>

              {status === "error" ? (
                <p className="text-sm font-semibold text-red-700">{errorMsg}</p>
              ) : null}

              <p className="text-xs text-black/60">
                {/* Keep your existing note text */}
                By submitting, you agree we can contact you about availability and booking details.
              </p>
            </form>
          </div>
        </div>

        {/* INFO / SIDEBAR (kept, but stacks on mobile) */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-lg font-bold">What happens next?</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {/* Keep your existing sidebar content */}
              <li>• We review your dates and vehicle type</li>
              <li>• We confirm availability ASAP</li>
              <li>• We share pickup details and next steps</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold">Tip</p>
              <p className="mt-1 text-sm text-white/70">
                If you’re applying for taxi use, mention it in notes so we can guide requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold">{label}</span>
      {children}
    </label>
  );
}