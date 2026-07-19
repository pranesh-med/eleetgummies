import { useRef, useState, type CSSProperties, type ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 100,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const distX = Math.abs(e.clientX - cx) - rect.width / 2;
    const distY = Math.abs(e.clientY - cy) - rect.height / 2;
    const withinRange = distX < padding && distY < padding;

    if (withinRange) {
      const dx = (e.clientX - cx) / strength;
      const dy = (e.clientY - cy) / strength;
      setTransform({ x: dx, y: dy, active: true });
    } else if (transform.active) {
      setTransform({ x: 0, y: 0, active: false });
    }
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0, active: false });
  };

  const style: CSSProperties = {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    transition: transform.active ? activeTransition : inactiveTransition,
    willChange: 'transform',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}