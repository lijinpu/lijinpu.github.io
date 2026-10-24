import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import type { Meta } from 'lib/types'

import { PropsWithChildren } from 'react'

import Navbar from 'components/Navbar'
import headerNavLinks from 'data/headerNavLinks.json'
/* import Footer from 'components/Footer' */
import fonts from 'lib/fonts'

const Layout: NextPage<PropsWithChildren<Meta>> = ({
  children,
  ...customMeta
}) => {
  // 浏览器标签标题：首页为 "Jinpu Li"，其他页面为 "Research | Jinpu Li" 这样的格式
  const { pathname } = useRouter()
  const current = headerNavLinks.find((nav) => nav.href === pathname)
  const pageTitle =
    current && current.href !== '/' ? `${current.title} | Jinpu Li` : 'Jinpu Li'

  const meta: Meta = {
    title: pageTitle,
    description: `Jinpu Li's Personal Website`,
    ...customMeta
  }

  return (
    <div className={`${fonts.className} flex flex-col h-full`}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-full text-black dark:text-white">
        {children}
      </main>
    </div>
  )
}

export default Layout
