import { useEffect, useRef, useState } from 'react';

interface Flavor {
  name: string;
  colors: [string, string];
}

const flavors: Flavor[] = [
  { name: 'Citrus Burst', colors: ['#FF8A3D', '#FFD23F'] },
  { name: 'Berry Blitz', colors: ['#FF5DA2', '#B600A8'] },
  { name: 'Cool Mint', colors: ['#5EE6C7', '#2FA890'] },
  { name: 'Mango Rush', colors: ['#FFB84D', '#FF7A3D'] },
  { name: 'Grape Surge', colors: ['#7B6EF6', '#4B2ED6'] },
  { name: 'Watermelon', colors: ['#FF6F91', '#FF3D5A'] },
  { name: 'Blue Raz', colors: ['#4DC9FF', '#2E7FE0'] },
  { name: 'Peach Power', colors: ['#FFB199', '#FF8A65'] },
  { name: 'Lime Charge', colors: ['#B6FF4D', '#7ED321'] },
  { name: 'Cherry Kick', colors: ['#FF4D6D', '#C9184A'] },
  { name: 'Pineapple', colors: ['#FFE14D', '#FFB300'] },
];

const flavorsRow1 = flavors.slice(0, 6);
const flavorsRow2 = flavors.slice(6, 11);

function FlavorTile({ flavor }: { flavor: Flavor }) {
  return (
    <div
      className="rounded-2xl flex items-end justify-start p-5 shrink-0"
      style={{
        width: 420,
        height: 270,
        background: `linear-gradient(135deg, ${flavor.colors[0]}, ${flavor.colors[1]})`,
      }}
    >
      <span className="text-white font-semibold uppercase tracking-wide text-xl drop-shadow">
        {flavor.name}
      </span>
    </div>
  );
}

function tripled<T>(arr: T[]): T[] {
  return [...arr, ...arr, ...arr];
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const val = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(val);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex gap-3 mb-3" style={{ willChange: 'transform', transform: `translateX(${offset - 200}px)` }}>
        {tripled(flavorsRow1).map((flavor, i) => (
          <FlavorTile key={`row1-${i}`} flavor={flavor} />
        ))}
      </div>
      <div className="flex gap-3" style={{ willChange: 'transform', transform: `translateX(${-(offset - 200)}px)` }}>
        {tripled(flavorsRow2).map((flavor, i) => (
          <FlavorTile key={`row2-${i}`} flavor={flavor} />
        ))}
      </div>
    </section>
  );
}