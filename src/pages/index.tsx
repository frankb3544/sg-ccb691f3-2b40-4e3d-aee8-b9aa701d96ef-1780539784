import { SEO } from "@/components/SEO";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <SEO 
        title="AI Growth Comm - AI Tools for Realtors & Small Business"
        description="Discover, learn, and master AI tools that drive real business growth. Join 2,500+ realtors and small business owners growing with AI."
      />
      <Navigation />
      <main>
        <Hero />
      </main>
    </>
  );
}