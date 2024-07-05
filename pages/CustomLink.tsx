import React from 'react'
import 'styles/customstyles.css'

interface CustomLinkProps {
  href: string
  text: string
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, text }) => {
  return (
    <a href={href} className="custom-link">
      {text}
    </a>
  )
}

export default CustomLink