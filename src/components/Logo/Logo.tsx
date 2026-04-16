import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 139.72 18.56"
      className={clsx('max-w-[17rem] w-full h-auto', className)}
    >
      <text
        fill="currentColor"
        fontFamily="GTPressuraMono, 'GT Pressura Mono'"
        fontSize={13}
        letterSpacing=".12em"
        transform="translate(18.11 13.82)"
      >
        <tspan x="0" y="0">SEAN ZUBRICKAS</tspan>
      </text>
      <path
        fill="currentColor"
        d="M9.23,2.32h0s1.96,1.96,1.96,1.96c.4.4.4,1.05,0,1.45h0c-.4.4-1.05.4-1.45,0l-1.23-1.23c-.4-.4-1.05-.4-1.45,0l-1.23,1.23c-.4.4-1.05.4-1.45,0h0c-.4-.4-.4-1.05,0-1.45l1.96-1.96h0s.73-.73.73-.73c.4-.4,1.04-.4,1.44,0l.73.72ZM7.04,16.85c.4.4,1.05.4,1.45,0l.72-.72,5.49-5.5h0s.72-.72.72-.72c.4-.4.4-1.05,0-1.45l-1.8-1.8c-.4-.4-1.05-.4-1.45,0h0c-.4.4-.4,1.05,0,1.45l.36.36c.4.4.4,1.05,0,1.45l-4.04,4.04c-.4.4-1.05.4-1.45,0l-4.04-4.04c-.4-.4-.4-1.05,0-1.45l.36-.36c.4-.4.4-1.05,0-1.45h0c-.4-.4-1.05-.4-1.45,0l-1.09,1.09h0s-.72.72-.72.72c-.4.4-.4,1.05,0,1.45l6.25,6.25.68.68Z"
      />
      <path
        fill="#a2f4b5"
        d="M4.79,8.44l2.24-2.24c.4-.4,1.05-.4,1.45,0h0c.4.4.4,1.05,0,1.45l-2.24,2.24c-.4.4-1.05.4-1.45,0h0c-.4-.4-.4-1.05,0-1.45ZM10.76,8.48h0c-.4-.4-1.05-.4-1.45,0l-2.24,2.24c-.4.4-.4,1.05,0,1.45h0c.4.4,1.05.4,1.45,0l2.24-2.24c.4-.4.4-1.05,0-1.45Z"
      />
    </svg>
  )
}
