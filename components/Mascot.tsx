import Image from 'next/image';

interface MascotProps {
  size?: number;
  animated?: boolean;
}

export default function Mascot({ size = 380, animated = true }: MascotProps) {
  return (
    <Image
      className={animated ? 'bounce' : ''}
      src="/mascot.png"
      alt="Choti Ki Duniya mascot"
      width={size}
      height={size}
      priority
      style={{ display: 'block', objectFit: 'contain' }}
    />
  );
}
