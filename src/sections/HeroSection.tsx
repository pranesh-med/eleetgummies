import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import GummyBottle from '../components/GummyBottle';

const navLinks = ['About', 'Benefits', 'Flavors', 'Contact'];

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0B0B0B]">
      {/* Nav */}
      <FadeIn delay={0.05} y={-16} as="nav">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-[0.18em] text-[11px] sm:text-xs md:text-sm hover:opacity-75 transition-opacity"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Big headline */}
      <div className="pointer-events-none mx-auto w-full max-w-[1500px] px-4 pt-6 md:px-8 md:pt-4">
        <FadeIn delay={0.15} y={28}>
          <h1 className="brand-heading text-center font-black uppercase leading-[0.9] tracking-tight text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw]">
            we&apos;re eleet
          </h1>
        </FadeIn>
      </div>

      {/* Bottle visual */}
      <FadeIn
        delay={0.28}
        y={26}
        className="absolute left-1/2 top-[56%] z-10 w-[230px] -translate-x-1/2 -translate-y-1/2 sm:w-[300px] md:w-[380px] lg:w-[450px]"
      >
        <Magnet padding={120} strength={2.2}>
          <GummyBottle />
        </Magnet>
      </FadeIn>

      {/* Bottom row */}
      <div className="absolute inset-x-0 bottom-6 z-20 md:bottom-10">
        <div className="mx-auto flex w-full max-w-[1400px] items-end justify-between px-6 md:px-10">
          <FadeIn delay={0.34} y={18}>
            <p
              className="max-w-[210px] text-[#D7E2EA] uppercase tracking-[0.12em] leading-snug sm:max-w-[260px] md:max-w-[320px]"
              style={{ fontSize: 'clamp(0.72rem, 1.1vw, 1rem)' }}
            >
              sports recovery gummies built to get you back on the field faster
            </p>
          </FadeIn>

          <FadeIn delay={0.42} y={18}>
            <ContactButton label="Shop Now" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
