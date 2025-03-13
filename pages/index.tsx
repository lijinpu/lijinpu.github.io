import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-row relative justify-between w-full">
      <div className="flex flex-col relative w-full">
        <h1 className="font-extrabold text-2xl tracking-tight mb-4">Jinpu Li &nbsp;&nbsp; 李金璞</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
        💡 PhD student in Economics 
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
        🎷 Saxophone player 
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
        ⚫ Go player
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
        🏍️ Motorcyclist
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
        📸 Photographer
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          {`"What is real is rational, and what is rational is real." — Hegel`}
        </p>


      </div>
      <div className="relative mr-auto">
        <Image
          className="rounded-full"
          alt="Jinpu Li"
          width={180}
          height={180}
          src={'/images/saxophone.jpg'}
          priority
        />
      </div>
    </div>
  )
}
