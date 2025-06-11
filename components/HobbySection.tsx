// components/HobbySection.tsx
import Image from 'next/image';
import type { FC } from 'react';

interface HobbySectionProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: React.ReactNode;
}

const HobbySection: FC<HobbySectionProps> = ({ imageSrc, alt, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-6 md:space-y-0 max-w-5xl mx-auto py-12">
      <div className="flex-shrink-0 w-full md:w-1/2">
        <Image src={imageSrc} alt={alt} width={400} height={300} className="rounded-lg shadow-md object-cover max-w-[300px] w-full h-auto" />
      </div>
      <div className="md:w-1/2 text-left">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">{title}</h2>
        <div className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">{description}</div>
      </div>
    </div>
  );
};

export default HobbySection;
