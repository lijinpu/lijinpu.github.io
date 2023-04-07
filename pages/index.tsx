import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-row relative justify-between w-full">
      <div className="flex flex-col relative w-full">
        <h1 className="font-extrabold text-2xl tracking-tight mb-4">Jinpu Li (李金璞)</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          PhD student in Economics
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {`All that is real is rational. All that is rational is real.`}
        </p>
      </div>
      <div className="relative mr-auto">
        <Image
          className="rounded-full"
          alt="Jinpu Li"
          width={120}
          height={120}
          src={'/images/avatar.jpg'}
          priority
        />
      </div>
    </div>
  )
}
