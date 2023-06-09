import ContactForm from '@/components/ContactForm';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[#f5f1e3] text-white scrollbar overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#343840]/80">
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="services" className="snap-center">
        <Services />
      </section>

      <section id="testimonials" className="snap-center">
        <Testimonials />
      </section>

      <section id="stay-connected" className="snap-center">
        <ContactForm />
      </section>
    </div>
  );
}
