import type { ProjectArchiveBlock as ProjectArchiveBlockProps } from '@/payload-types'

import React from 'react'
import Link from 'next/link'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const ProjectArchiveBlock: React.FC<
  ProjectArchiveBlockProps & {
    id?: string
  }
> = (props) => {
  const { id, projects } = props

  if (!projects?.length) return null

  return (
    <div className="container" id={`block-${id}`}>
      <div className="flex flex-col gap-16">
        {projects.map((project) => {
          if (typeof project === 'string') return null

          const { featuredImage, slug } = project
          const media = typeof featuredImage === 'object' ? featuredImage : null

          if (!media) return null

          return (
            <Link key={project.id} href={`/projects/${slug}`} className="block">
              <Media
                imgClassName="w-full border border-border rounded-[0.8rem]"
                resource={media}
              />
              {media.caption && (
                <div className="mt-6">
                  <RichText data={media.caption} enableGutter={false} className="[&_h1]:mb-2 [&_h2]:mb-2 [&_h3]:mb-2 [&_h4]:mb-2" />
                </div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
