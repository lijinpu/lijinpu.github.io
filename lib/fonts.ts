import localFont from 'next/font/local'

// 英文：TeX Gyre Pagella（开源的 Palatino 复刻，即 LaTeX 里的 Pagella）
export const pagella = localFont({
  src: [
    { path: '../public/fonts/tex-gyre-pagella-400.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/tex-gyre-pagella-400italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/tex-gyre-pagella-700.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/tex-gyre-pagella-700italic.woff2', weight: '700', style: 'italic' }
  ],
  variable: '--font-pagella',
  display: 'swap',
  adjustFontFallback: 'Times New Roman'
})

// 中文：思源宋体（Noto Serif SC）子集，只含网站上用到的字。
// 内容里出现新字后，运行 scripts/subset-zh-font.py 重新生成。
export const notoSerifSC = localFont({
  src: [
    { path: '../public/fonts/noto-serif-sc-subset-400.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/noto-serif-sc-subset-700.woff2', weight: '700', style: 'normal' }
  ],
  variable: '--font-noto-serif-sc',
  display: 'swap',
  adjustFontFallback: false
})
