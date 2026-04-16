import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
  src?: string
}

export const Logo = (props: Props) => {
  const {
    loading: loadingFromProps,
    priority: priorityFromProps,
    className,
    src = '/sz-logo.svg',
  } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="SZ Logo"
      width={479}
      height={65}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[17rem] w-full h-auto', className)}
      src={src}
    />
  )
}
