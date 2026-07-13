import { Section } from "./section";

export function About() {
  return (
    <Section id="about" label="About">
      <p className="max-w-2xl text-neutral-700" style={{ lineHeight: 1.7 }}>
        I started studying offensive security in October 2025 through TryHackMe
        learning paths and CTF challenges. As I gained experience in labs, I
        created RedCode to make repetitive reconnaissance, scanning, evidence
        handling and reporting tasks easier to manage. I later paused the project
        and recently resumed its development. Separately, I have started publishing
        TryHackMe write-ups based on my manual testing and notes from each room.
      </p>
    </Section>
  );
}
