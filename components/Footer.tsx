import Link from 'next/link'
import { GitHubIcon } from 'data/icons'

export default function Footer() {
  return (
    <footer className="flex justify-between max-w-3xl container mx-auto p-2 text-gray-400 tracking-tight m-2">
      <p className="py-2 underline-offset-3 text-gray-600">
        {`© ${new Date().getFullYear()} `}
        <Link
          className="hover:underline hover:text-black dark:hover:text-white"
          href={'https://github.com/thuljp'}
          target={'_blank'}
        >
          Jinpu Li
        </Link>
        . All rights reserved. 
      </p>
      {/* Template from <a href="https://github.com/shenlu89/shenlu89.github.io">Shen Lu</a>. */ }
      <ul className="flex items-center py-2">
        <li>
          <Link
            className="flex hover:text-black dark:hover:text-white"
            href="https://github.com/thuljp"
            target={'_blank'}
          >
            <GitHubIcon />
          </Link>
        </li>
      </ul>
    </footer>
  )
}
