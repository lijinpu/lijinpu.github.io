import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-12 px-4 min-h-[80vh] text-center">
      
      {/* 头像居中偏上 */}
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

      {/* 姓名 */}
      <h1 className="font-extrabold text-3xl mb-2">Jinpu Li &nbsp;&nbsp; 李金璞</h1>

      {/* 简介段落拆分为两句 */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-1">
        I am Jinpu Li (李金璞), an econ PhD candidate @ Tsinghua University.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
        My field of interest: Data Economy, Economics of AI, and Macro-Finance.
      </p>

      {/* 引言 */}
      <p className="text-gray-600 dark:text-gray-400 mt-6 italic">
        &quot;Intelligence is the ability to adapt to change.&quot; — Stephen Hawking
      </p>
    </div>
  )
}
