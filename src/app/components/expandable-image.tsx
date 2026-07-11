import { useEffect, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Props {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function ExpandableImage({ src, alt, caption, className }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Expand image: ${alt}`}
        className={`group relative block w-full cursor-zoom-in text-left ${className ?? ""}`}
      >
        <span className="pointer-events-none absolute right-2 top-2 z-10 inline-flex items-center gap-1 border border-black/20 bg-white px-2 py-1 text-neutral-600 transition-colors group-hover:bg-black group-hover:text-white" style={{ fontSize: "0.7rem", fontWeight: 500 }}>
          <Maximize2 size={11} />
          Expand
        </span>
        <ImageWithFallback src={src} alt={alt} className="block w-full" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <div
            className="relative flex max-h-full max-w-full flex-col"
            style={{ maxWidth: "95vw", maxHeight: "95vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-2 top-2 z-10 flex items-center gap-1 border border-black/30 bg-white px-2 py-1 text-neutral-700 hover:bg-black hover:text-white"
              style={{ fontSize: "0.75rem", fontWeight: 500 }}
            >
              <X size={13} /> Close
            </button>
            <div className="overflow-auto">
              <ImageWithFallback
                src={src}
                alt={alt}
                style={{ display: "block", maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
              />
            </div>
            {caption && (
              <p className="border-t border-white/20 bg-black px-4 py-2 text-white" style={{ fontSize: "0.78rem" }}>
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
