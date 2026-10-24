import Image from 'next/image'
import { Tag } from 'components/Paper'

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
          src="/images/icon.jpg"
          priority
        />
      </div>

      {/* 姓名 */}
      <h1 className="font-bold text-3xl mb-3">
        Jinpu Li<span className="zh">李金璞</span>
      </h1>

      {/* 简介段落拆分为两句 */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-1">
        I am a Ph.D. candidate in Economics at Tsinghua University.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
        My field of interest: Data Economy, Economics of AI, and Macro-Finance.
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-8">
        I am on the 2026–2027 job market.
        {/* 首页主要入口，标签比其他地方略大一号 */}
        <Tag
          href="https://cloud.tsinghua.edu.cn/f/cb9b7795bc654f65a4cb/"
          className="!ml-2 !px-3 !text-sm !leading-6"
        >
          Research Statement
        </Tag>
      </p>

    </div>
  )
}
