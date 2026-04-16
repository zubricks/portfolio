import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function ProjectsPage() {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    depth: 1,
    limit: 100,
    overrideAccess: false,
    sort: '-year',
  })

  return (
    <div className="pt-24 pb-24">
      <div className="container mb-16">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>

      <div className="container">
        <div className="flex flex-col gap-16">
          {projects.docs.map((project) => {
            const featuredImage =
              typeof project.featuredImage === 'object' ? project.featuredImage : null

            return (
              <Link key={project.id} href={`/projects/${project.slug}`} className="block">
                {featuredImage && (
                  <Media
                    imgClassName="w-full border border-border rounded-[0.8rem]"
                    resource={featuredImage}
                  />
                )}
                {featuredImage && typeof featuredImage === 'object' && featuredImage.caption && (
                  <div className="mt-6">
                    <RichText
                      data={featuredImage.caption}
                      enableGutter={false}
                      className="[&_h1]:mb-2 [&_h2]:mb-2 [&_h3]:mb-2 [&_h4]:mb-2"
                    />
                  </div>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Projects',
  }
}
