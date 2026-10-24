// components/Footer.tsx
// 全站页脚：版权，以及 Email / Google Scholar / SSRN 链接
import { Tag } from 'components/Paper'

const EMAIL = 'lijinpu19990306@gmail.com'

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
      <div className="flex flex-col gap-3 border-t border-gray-200 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Jinpu Li</p>
        <div className="flex flex-wrap gap-1.5 [&>*]:!ml-0">
          <Tag href={`mailto:${EMAIL}`}>Email</Tag>
          <Tag href="https://scholar.google.com/citations?user=1rOBs8AAAAAJ">Google Scholar</Tag>
          <Tag href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=4286947">SSRN</Tag>
        </div>
      </div>
    </footer>
  )
}
