import type { Block } from 'payload'

export const ProjectArchive: Block = {
  slug: 'projectArchive',
  interfaceName: 'ProjectArchiveBlock',
  fields: [
    {
      name: 'projects',
      type: 'relationship',
      relationTo: 'projects',
      hasMany: true,
      required: true,
    },
  ],
  labels: {
    plural: 'Project Archives',
    singular: 'Project Archive',
  },
}
