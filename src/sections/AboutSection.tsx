import { Citrus, Leaf, Dumbbell, Zap } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

function CornerBadge({
  Icon,
  bg,
  className,
}: {
  Icon: typeof Citrus;
  bg: string;
  className: string;
}) {
  return (
    <div
      className={`absolute rounded-full flex items-center justify-center w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] md:w-[140px] md:h-[140px] ${className}`}
      style={{ background: bg }}
    >
      <Icon className="w-1/2 h-1/2 text-[#0C0C0C]" strokeWidth={1.5} />
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <CornerBadge Icon={Citrus} bg="#FFB84D" className="top-[4%] left-[1%] sm:left-[2%] md:left-[4%]" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <CornerBadge Icon={Leaf} bg="#5EE6C7" className="bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <CornerBadge Icon={Dumbbell} bg="#FF5DA2" className="top-[4%] right-[1%] sm:right-[2%] md:right-[4%]" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <CornerBadge Icon={Zap} bg="#7B6EF6" className="bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="brand-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About eleet
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text="Built by athletes who got tired of chalky pills and thin promises, eleet gummyz packs real recovery nutrients into a gummy you actually want to eat. We focus on electrolytes, aminos, and joint support, and we truly enjoy helping people train harder and bounce back faster. Let's fuel your comeback together!"
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <ContactButton label="Shop Now" />
        </div>
      </div>
    </section>
  );
}