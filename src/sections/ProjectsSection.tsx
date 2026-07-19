import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';

interface FlavorProduct {
  number: string;
  category: string;
  name: string;
  colors: [string, string, string];
}

const flavorProducts: FlavorProduct[] = [
  {
    number: '01',
    category: 'Bestseller',
    name: 'Citrus Recovery Blend',
    colors: ['#FFB84D', '#FF8A3D', '#FFD23F'],
  },
  {
    number: '02',
    category: 'New Release',
    name: 'Berry Restore Mix',
    colors: ['#FF5DA2', '#B600A8', '#FF9AC8'],
  },
  {
    number: '03',
    category: 'Limited Batch',
    name: 'Tropical Endurance Pack',
    colors: ['#5EE6C7', '#2FA890', '#7B6EF6'],
  },
];

function GradientTile({ color, height }: { color: string; height: string }) {
  return (
    <div
      className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
      style={{ height, background: `linear-gradient(160deg, ${color}, #0C0C0C)` }}
    />
  );
}

function FlavorCard({ flavor, index, total }: { flavor: FlavorProduct; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh] flex items-center" style={{ position: 'sticky', top: `${24 + index * 4}px` }}>
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {flavor.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {flavor.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {flavor.name}
              </span>
            </div>
          </div>
          <LiveProjectButton label="Shop Flavor" />
        </div>

        <div className="flex gap-3">
          <div className="flex flex-col gap-3" style={{ width: '40%' }}>
            <GradientTile color={flavor.colors[0]} height="clamp(130px, 16vw, 230px)" />
            <GradientTile color={flavor.colors[1]} height="clamp(160px, 22vw, 340px)" />
          </div>
          <div style={{ width: '60%' }}>
            <GradientTile color={flavor.colors[2]} height="100%" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="flavors"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="brand-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Flavor
      </h2>

      <div className="max-w-5xl mx-auto">
        {flavorProducts.map((flavor, i) => (
          <FlavorCard key={flavor.number} flavor={flavor} index={i} total={flavorProducts.length} />
        ))}
      </div>
    </section>
  );
}