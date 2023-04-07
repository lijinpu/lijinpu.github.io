import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

const Comment = () => {
  const { theme } = useTheme()

  return (
    <Giscus
      id="comments"
      repo="lijinpu/lijinpu.github.io"
      repoId="R_kgDOJTgydw"
      category="Announcements"
      categoryId="DIC_kwDOJTgyd84CVmu3"
      mapping="url"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme === 'dark' ? 'transparent_dark' : 'light'}
      lang="zh-CN"
      loading="lazy"
    />
  )
}

export default Comment
