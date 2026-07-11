import { useEffect, useId, useRef, useState } from "react";
import mermaid from "mermaid";
import { Maximize2, X, Plus, Minus } from "lucide-react";

mermaid.initialize({
  startOnLoad: false,
  theme: "base",
  fontFamily: "ui-monospace, monospace",
  themeVariables: {
    background: "#ffffff",
    primaryColor: "#ffffff",
    primaryTextColor: "#000000",
    primaryBorderColor: "#000000",
    lineColor: "#000000",
    tertiaryColor: "#f5f5f5",
    clusterBkg: "#fafafa",
    clusterBorder: "#000000",
    fontSize: "13px",
  },
  flowchart: { curve: "linear", htmlLabels: true, padding: 12 },
});

export function MermaidDiagram({ chart }: { chart: string }) {
  const rawId = useId().replace(/:/g, "");
  const [svg, setSvg] = useState("");
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef({
    active: false,
    x: 0,
    y: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  useEffect(() => {
    let active = true;
    mermaid
      .render(`m-${rawId}`, chart)
      .then(({ svg }) => {
        if (active) setSvg(svg);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [chart, rawId]);

  // Lock body scroll and handle Escape when modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Keep the diagram centered when the modal opens and when zoom changes.
  useEffect(() => {
    if (!open) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    requestAnimationFrame(() => {
      viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
      viewport.scrollTop = (viewport.scrollHeight - viewport.clientHeight) / 2;
    });
  }, [open, zoom]);

  const openModal = () => {
    setZoom(1);
    setOpen(true);
  };

  return (
    <>
      {/* Inline preview — click to expand */}
      <button
        type="button"
        onClick={openModal}
        aria-label="Expand diagram"
        className="group relative block w-full cursor-zoom-in overflow-x-auto text-left [&_svg]:h-auto [&_svg]:max-w-full"
      >
        <span
          className="pointer-events-none absolute right-2 top-2 z-10 inline-flex items-center gap-1.5 border border-black/20 bg-white px-2 py-1 text-neutral-600 transition-colors group-hover:bg-black group-hover:text-white"
          style={{ fontSize: "0.7rem", fontWeight: 500 }}
        >
          <Maximize2 size={12} />
          Expand
        </span>
        <span className="block" dangerouslySetInnerHTML={{ __html: svg }} />
      </button>

      {/* Centered modal — click backdrop to close, wheel to zoom, drag to pan */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="flex h-[92vh] w-[95vw] flex-col border border-black bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black px-4 py-3">
              <span className="uppercase tracking-widest text-neutral-500" style={{ fontSize: "0.72rem", fontWeight: 600 }}>
                Network Architecture
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(0.4, +(z - 0.2).toFixed(2)))}
                  aria-label="Zoom out"
                  className="inline-flex items-center justify-center border border-black p-1.5 hover:bg-black hover:text-white"
                >
                  <Minus size={15} />
                </button>
                <span className="w-12 text-center text-neutral-600" style={{ fontSize: "0.8rem", fontFamily: "ui-monospace, monospace" }}>
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(4, +(z + 0.2).toFixed(2)))}
                  aria-label="Zoom in"
                  className="inline-flex items-center justify-center border border-black p-1.5 hover:bg-black hover:text-white"
                >
                  <Plus size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="ml-2 inline-flex items-center justify-center border border-black p-1.5 hover:bg-black hover:text-white"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            <div
              ref={viewportRef}
              className={`flex-1 overflow-auto p-6 select-none ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"}`}
              onWheel={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setZoom((z) => Math.min(4, Math.max(0.4, +(z - Math.sign(e.deltaY) * 0.15).toFixed(2))));
              }}
              onPointerDown={(e) => {
                if (e.button !== 0 || zoom <= 1) return;
                const viewport = viewportRef.current;
                if (!viewport) return;
                dragRef.current = {
                  active: true,
                  x: e.clientX,
                  y: e.clientY,
                  scrollLeft: viewport.scrollLeft,
                  scrollTop: viewport.scrollTop,
                };
                viewport.setPointerCapture(e.pointerId);
              }}
              onPointerMove={(e) => {
                if (!dragRef.current.active) return;
                const viewport = viewportRef.current;
                if (!viewport) return;
                e.preventDefault();
                viewport.scrollLeft = dragRef.current.scrollLeft - (e.clientX - dragRef.current.x);
                viewport.scrollTop = dragRef.current.scrollTop - (e.clientY - dragRef.current.y);
              }}
              onPointerUp={(e) => {
                dragRef.current.active = false;
                viewportRef.current?.releasePointerCapture(e.pointerId);
              }}
              onPointerCancel={() => {
                dragRef.current.active = false;
              }}
            >
              <div
                className="flex min-h-full items-center justify-center"
                style={{ width: `${Math.max(1, zoom) * 100}%` }}
              >
                <div
                  className="w-full [&_svg]:mx-auto [&_svg]:h-auto [&_svg]:w-full [&_svg]:max-w-none"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
