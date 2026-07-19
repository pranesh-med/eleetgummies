import FadeIn from '../components/FadeIn';

const benefits = [
  {
    number: '01',
    name: 'Faster Recovery',
    description:
      'A blend of BCAAs and tart cherry extract that helps ease soreness so you can get back to training sooner.',
  },
  {
    number: '02',
    name: 'Electrolyte Boost',
    description:
      'Sodium, potassium, and magnesium to replace what you sweat out, keeping you hydrated through hard sessions.',
  },
  {
    number: '03',
    name: 'Joint Support',
    description:
      'Collagen and turmeric work together to support flexible, resilient joints for the long haul.',
  },
  {
    number: '04',
    name: 'Muscle Repair',
    description:
      'Protein-adjacent aminos that support lean muscle repair, so today\u2019s workout builds tomorrow\u2019s strength.',
  },
  {
    number: '05',
    name: 'Sleep & Restore',
    description:
      'A touch of magnesium and L-theanine to help your body recover overnight, not just after the gym.',
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Benefits
      </h2>

      <div className="max-w-5xl mx-auto">
        {benefits.map((benefit, i) => (
          <FadeIn key={benefit.number} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-black text-[#0C0C0C] shrink-0"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {benefit.number}
              </span>
              <div className="flex flex-col gap-2 sm:gap-3">
                <span
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {benefit.name}
                </span>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}