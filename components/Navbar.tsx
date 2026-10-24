import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import headerNavLinks from 'data/headerNavLinks.json'
import ThemeSwitcher from 'components/ThemeSwitcher'

const Navbar: NextPage = () => {
  const { asPath } = useRouter()

  return (
    <header className="flex items-center justify-between gap-2 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
      {/* 负外边距抵消第一个链接的内边距，使导航文字与正文左边缘对齐；
          手机上缩小字号和间距，避免导航栏超出屏幕 */}
      <nav className="flex flex-row min-w-0 -ml-[5px] sm:-ml-2">
        {headerNavLinks?.map((nav) => (
          <Link
            className={`px-[5px] py-2 sm:p-2 text-sm sm:text-base whitespace-nowrap underline-offset-4 hover:underline outline-none ${
              asPath === nav?.href
                ? 'font-bold no-underline'
                : 'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-gray-200'
            }`}
            key={nav?.title}
            href={nav?.href}
          >
            {nav?.title}
          </Link>
        ))}
      </nav>
      <div className="flex items-center shrink-0 -mr-1">
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default Navbar
