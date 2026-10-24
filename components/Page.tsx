// components/Page.tsx
// 内容页（Research / Teaching / CV / Personal）共用的外壳：
// 统一的排版样式、标题（英文 + 灰色中文副标题）和标题下的分隔线。
import type { ReactNode } from 'react'

type PageProps = {
  title: string
  zh?: string
  children: ReactNode
}

export default function Page({ title, zh, children }: PageProps) {
  return (
    <article
      className="
        relative max-w-none
        prose dark:prose-invert
        prose-ul:my-2 prose-li:my-1
        prose-h2:mt-8 prose-h2:mb-3
        prose-h3:mt-5 prose-h3:mb-2
        [&_li>ul]:my-1
        [&_li>ul]:pl-6
        [&_li>ul>li]:my-0
        [&_li>ul>li]:text-gray-500
        dark:[&_li>ul>li]:text-gray-400
      "
    >
      <h1>
        {title}
        {zh && <span className="zh">{zh}</span>}
      </h1>
      <hr />
      {children}
    </article>
  )
}
