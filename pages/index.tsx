import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-start w-full space-y-6 md:space-y-0 md:space-x-8">
      {/* 左侧文本区域 */}
      <div className="flex flex-col flex-1">
        <h1 className="font-extrabold text-2xl tracking-tight mb-4">
          Jinpu Li &nbsp;&nbsp; 李金璞
        </h1>

        <p className="mb-4">
          I am Jinpu Li (李金璞), a 4th-year PhD candidate @ Tsinghua University. My field of interest: data economy, digital economy, and macro-finance.
        </p>

        <h2 className="font-extrabold text-2xl tracking-tight mb-4">Hobbies</h2>

        <ul className="text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li>🎷 Saxophone</li>
          <li>⚫ Go</li>
          <li>🏍️ Motorcycle</li>
          <li>📸 Photograph</li>
        </ul>

        <p className="text-gray-600 dark:text-gray-400 mt-2">
          "What is real is rational, and what is rational is real." — Hegel
        </p>
      </div>

      {/* 右侧头像区域 */}
      <div className="flex-shrink-0">
        <Image
          className="rounded-full"
          alt="Jinpu Li"
          width={180}
          height={180}
          src="/images/saxophone.jpg"
          priority
        />
      </div>
    </div>
  )
}
