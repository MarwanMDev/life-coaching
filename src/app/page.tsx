import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[#f5f1e3] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#e0aaaa]/80">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
    </div>
  );
}
