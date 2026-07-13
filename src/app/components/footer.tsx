export function Footer() {
  return (
    <footer id="contact">
      <div className="mx-auto flex max-w-4xl justify-end px-6 py-14">
        <p className="text-neutral-400" style={{ fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Edoardo Crocetti
        </p>
      </div>
    </footer>
  );
}
