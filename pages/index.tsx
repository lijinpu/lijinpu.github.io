import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center">
      
      {/* 头像居中 */}
      <div className="mb-6">
        <Image
          className="rounded-full shadow-lg"
          alt="Jinpu Li"
          width={180}
          height={180}
          src="/images/saxophone.jpg"
          priority
        />
      </div>

      {/* 姓名居中 */}
      <h1 className="font-extrabold text-3xl mb-2">Jinpu Li &nbsp;&nbsp; 李金璞</h1>

      {/* 简介居中 */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
        I am Jinpu Li (李金璞), a 4th-year PhD candidate @ Tsinghua University.
        My field of interest: data economy, digital economy, and macro-finance.
      </p>

      {/* 引言，注意已用 &quot; 进行转义 */}
      <p className="text-gray-600 dark:text-gray-400 mt-6 italic">
        &quot;What is real is rational, and what is rational is real.&quot; — Hegel
      </p>
    </div>
  )
}
