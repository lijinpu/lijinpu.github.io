// components/HobbySection.tsx
import Image from 'next/image';
import type { FC } from 'react';

interface HobbySectionProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: React.ReactNode;
}

// not-prose：不受外层 prose 排版影响，样式在这里单独设定，颜色与全站保持一致
const HobbySection: FC<HobbySectionProps> = ({ imageSrc, alt, title, description }) => {
  return (
    <section className="not-prose flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
      <div className="flex-shrink-0 w-full max-w-[300px]">
        <Image src={imageSrc} alt={alt} width={400} height={300} className="rounded-lg shadow-md object-cover w-full h-auto" />
      </div>
      <div className="flex-1 text-left">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h2>
        <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{description}</div>
      </div>
    </section>
  );
};

export default HobbySection;
