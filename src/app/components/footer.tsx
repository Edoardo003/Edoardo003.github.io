export function Footer() {
  return (
    <footer id="contact">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <p className="mb-8 uppercase tracking-widest text-neutral-500" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
          Contact
        </p>

        <div className="mb-10">
          <p className="mb-3 uppercase tracking-widest text-neutral-500" style={{ fontSize: "0.68rem", fontWeight: 600 }}>
            Available for
          </p>
          <div className="flex flex-wrap gap-2">
            {["Junior Penetration Tester", "Internship", "Graduate Programs"].map((r) => (
              <span key={r} className="border border-black/20 px-2.5 py-1 text-neutral-800" style={{ fontSize: "0.85rem" }}>
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-5" style={{ fontWeight: 500 }} aria-label="Contact links">
            <a href="https://github.com/Edoardo003" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="text-neutral-600 underline-offset-4 hover:text-black hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/edoardo-crocetti-24b260374/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="text-neutral-600 underline-offset-4 hover:text-black hover:underline">LinkedIn</a>
            <a href="https://tryhackme.com/p/Edoardo.03" target="_blank" rel="noopener noreferrer" aria-label="TryHackMe (opens in a new tab)" className="text-neutral-600 underline-offset-4 hover:text-black hover:underline">TryHackMe</a>
            <a href="mailto:contact@edoardosec.com" className="text-neutral-600 underline-offset-4 hover:text-black hover:underline">contact@edoardosec.com</a>
          </nav>
          <p className="text-neutral-400" style={{ fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Edoardo Crocetti
          </p>
        </div>
      </div>
    </footer>
  );
}
