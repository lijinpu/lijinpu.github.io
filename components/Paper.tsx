// components/Paper.tsx
// 论文条目里用到的小部件：链接标签、状态标签、可展开的摘要。
//
// 用法示例：
//   Big Push Toward Big Data (with Feng Dong and Haoning Sun).
//   <Status>R&R</Status>
//   <Tag href="https://papers.ssrn.com/...">SSRN</Tag>
//   <Tag href="/papers/xxx.pdf">PDF</Tag>
//   <Abstract>这里写摘要……</Abstract>   ← 放在条目最后，点击后在下方展开
import { useState } from 'react'
import type { ReactNode } from 'react'

export function Tag({
  href,
  children,
  className = ''
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  // 外部网页在新标签页打开；mailto: 和站内链接不需要
  const external = /^https?:\/\//.test(href)
  return (
    <a
      className={`paper-tag ${className}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

export function Status({ children }: { children: ReactNode }) {
  return <span className="status-tag">{children}</span>
}

export function Abstract({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        className="paper-tag"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        Abstract {open ? '\u2212' : '+'}
      </button>
      {open && <div className="paper-abstract">{children}</div>}
    </>
  )
}
