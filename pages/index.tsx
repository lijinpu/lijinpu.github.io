import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-start md:items-center md:space-x-12 space-y-8 md:space-y-0">
        
        {/* 左侧：文字信息 */}
        <div className="flex-1">
          <h1 className="font-extrabold text-3xl mb-4">
            Jinpu Li &nbsp;&nbsp; 李金璞
          </h1>
          <p className="text-lg mb-4 leading-relaxed">
            I am Jinpu Li (李金璞), a 4th-year PhD candidate @ Tsinghua University.
            My field of interest: data economy, digital economy, and macro-finance.
          </p>

          <h2 className="font-bold text-2xl mt-8 mb-2">Hobbies</h2>
          <ul className="text-gray-700 dark:text-gray-400 space-y-1 mb-4 text-base">
            <li>🎷 Saxophone</li>
            <li>⚫ Go</li>
            <li>🏍️ Motorcycle</li>
            <li>📸 Photograph</li>
          </ul>

          <p className="text-gray-600 dark:text-gray-400 italic">
            "What is real is rational, and what is rational is real." — Hegel
          </p>
        </div>

        {/* 右侧：头像 */}
        <div className="flex-shrink-0">
          <Image
            className="rounded-full shadow-lg"
            alt="Jinpu Li"
            width={180}
            height={180}
            src="/images/saxophone.jpg"
            priority
          />
        </div>
      </div>
    </div>
  )
}
