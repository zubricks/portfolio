import type { ReusableContentBlock as ReusableContentBlockType } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import React from 'react'

export const ReusableContentBlockComponent: React.FC<ReusableContentBlockType> = ({ reusableContent }) => {
  if (typeof reusableContent === 'object' && reusableContent !== null) {
    return <RenderBlocks blocks={reusableContent.layout} />
  }

  return null
}
