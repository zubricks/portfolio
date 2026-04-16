import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="bg-[#a2f4b5] py-16 md:py-24 px-8 md:px-16">
      <div className="container">
        {richText && (
          <RichText
            className="mb-0 [&_h1]:text-6xl [&_h1]:md:text-8xl [&_h1]:lg:text-9xl [&_h1]:leading-none [&_h2]:text-5xl [&_h2]:md:text-7xl [&_h2]:lg:text-8xl [&_h2]:leading-none [&_p]:text-xl [&_p]:md:text-2xl"
            data={richText}
            enableGutter={false}
          />
        )}
        {links && links.length > 0 && (
          <div className="flex justify-end mt-8">
            {links.map(({ link }, i) => {
              return (
                <CMSLink
                  key={i}
                  size="lg"
                  {...link}
                  className="bg-[#1a1a1a] text-[#a2f4b5] hover:bg-[#333] px-6 py-3 text-base"
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
