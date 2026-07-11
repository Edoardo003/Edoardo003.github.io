import type { ReactNode } from "react";

export function Section({
  id,
  label,
  subtitle,
  children,
}: {
  id: string;
  label: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-b border-black">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <h2 id={`${id}-heading`} className="uppercase tracking-widest text-neutral-500" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
          {label}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-neutral-500" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
            {subtitle}
          </p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
