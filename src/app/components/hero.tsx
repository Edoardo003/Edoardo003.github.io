import { Github, Shield, ArrowDown, Mail, Linkedin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const ctas = [
  { label: "TryHackMe", href: "https://tryhackme.com/p/Edoardo.03", Icon: Shield },
  { label: "GitHub", href: "https://github.com/Edoardo003", Icon: Github },
];

export function Hero() {
  return (
    <header className="border-b border-black">
      <div className="mx-auto max-w-4xl px-6 pb-14 pt-20">
        <h1 className="tracking-tight" style={{ fontSize: "clamp(2rem, 6vw, 3.25rem)", fontWeight: 700, lineHeight: 1.05 }}>
          Edoardo Crocetti
        </h1>
        <p className="mt-3 text-neutral-500" style={{ fontSize: "1rem", fontFamily: "ui-monospace, monospace" }}>
          Penetration Tester / Web Security / API Security / Automation
        </p>

        <p className="mt-6 max-w-2xl text-neutral-700" style={{ fontSize: "1.0625rem", lineHeight: 1.7 }}>
          Currently focused on web application security, API testing and
          security automation. I build tools to automate reconnaissance,
          vulnerability assessment and reporting, and improve through hands-on
          labs, bug bounty practice and offensive security research.
        </p>

        <nav className="mt-8 flex flex-wrap items-center gap-4" aria-label="Primary">
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-2 border border-black bg-black px-3.5 py-2 text-white transition-colors hover:bg-white hover:text-black"
                style={{ fontSize: "0.875rem", fontWeight: 500 }}
              >
                <Mail size={15} />
                Contact Me
              </button>
            </DialogTrigger>
            <DialogContent className="rounded-none border-black bg-white">
              <DialogHeader>
                <DialogTitle>Get in touch</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://www.linkedin.com/in/edoardo-crocetti-24b260374/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 border border-black px-3.5 py-2 transition-colors hover:bg-black hover:text-white"
                  style={{ fontSize: "0.875rem", fontWeight: 500 }}
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
                <a
                  href="mailto:contact@edoardosec.com?subject=Contact%20from%20Edoardo%20Crocetti%27s%20portfolio"
                  aria-label="Email contact@edoardosec.com"
                  className="inline-flex flex-1 items-center justify-center gap-2 border border-black bg-black px-3.5 py-2 text-white transition-colors hover:bg-white hover:text-black"
                  style={{ fontSize: "0.875rem", fontWeight: 500 }}
                >
                  <Mail size={15} />
                  Email me
                </a>
              </div>
            </DialogContent>
          </Dialog>
          <a
            href="#projects"
            className="ml-4 inline-flex items-center gap-2 border border-black px-3.5 py-2 transition-colors hover:bg-black hover:text-white"
            style={{ fontSize: "0.875rem", fontWeight: 500 }}
          >
            <ArrowDown size={15} />
            View Projects
          </a>
          {ctas.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              className="inline-flex items-center gap-2 border border-black px-3.5 py-2 transition-colors hover:bg-black hover:text-white"
              style={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
