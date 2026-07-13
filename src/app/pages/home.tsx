import { Hero } from "../components/hero";
import { About } from "../components/about";
import { FeaturedProject } from "../components/featured-project";
import { HomeLab } from "../components/home-lab";
import { SecurityWriteups } from "../components/security-writeups";
import { Experience } from "../components/experience";
import { Footer } from "../components/footer";

export function Home() {
  return (
    <div
      className="min-h-screen w-full bg-white text-black"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <Hero />
      <About />
      <FeaturedProject />
      <HomeLab />
      <SecurityWriteups />
      <Experience />
      <Footer />
    </div>
  );
}
