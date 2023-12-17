import {
  BackToTop,
  Contact,
  Featured,
  Hero,
  HowToMake,
  Reviews,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-[#dcfce7] overflow-hidden">
      <Hero />
      <Featured />
      <HowToMake />
      <Reviews />
      <Contact />
      <BackToTop />
    </main>
  );
}
