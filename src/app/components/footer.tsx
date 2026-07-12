export function Footer() {
  return (
    <footer id="contact">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <p className="mb-8 uppercase tracking-widest text-neutral-500" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
          Availability
        </p>

        <div className="mb-10">
          <div className="flex max-w-sm flex-col gap-2">
            {["Junior Penetration Tester", "Internship", "Graduate Programs"].map((r) => (
              <span key={r} className="w-full border border-black/20 px-2.5 py-1 text-neutral-800" style={{ fontSize: "0.85rem" }}>
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <p className="text-neutral-400" style={{ fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Edoardo Crocetti
          </p>
        </div>
      </div>
    </footer>
  );
}
