import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'

import type { Project } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { getServerSideURL } from '@/utilities/getURL'
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return projects.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function ProjectPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = '/projects/' + decodedSlug
  const project = await queryProjectBySlug({ slug: decodedSlug })

  if (!project) return <PayloadRedirects url={url} />

  const categories =
    project.categories
      ?.map((cat) => (typeof cat === 'object' ? cat.title : null))
      .filter(Boolean) ?? []

  return (
    <article className="pt-16 bg-amber-50 dark:bg-black">
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      <div className="container mb-16">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        {categories.length > 0 && (
          <p className="text-muted-foreground mt-2">{categories.join(', ')}</p>
        )}

        <div className="flex gap-16 mt-8">
          {project.deliverables && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-2">Deliverables</h2>
              <RichText data={project.deliverables} enableGutter={false} />
            </div>
          )}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide mb-2">Year</h2>
            <p>{project.year}</p>
          </div>
          {project.websiteUrl && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide mb-2">Website</h2>
              <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="underline">
                {project.websiteUrl.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
        </div>

        {project.description && (
          <div className="mt-8">
            <RichText data={project.description} enableGutter={false} />
          </div>
        )}
      </div>

      {project.layout && project.layout.length > 0 && <RenderBlocks blocks={project.layout} />}
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const project = await queryProjectBySlug({ slug: decodedSlug })

  const title = project?.title ? `${project.title} | Portfolio` : 'Portfolio'

  return {
    title,
    openGraph: {
      title,
      url: `${getServerSideURL()}/projects/${decodedSlug}`,
    },
  }
}

const queryProjectBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'projects',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
