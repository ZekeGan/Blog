'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const useSidebarRoutes = () => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      { url: '/', icon: '', label: 'Home', active: pathname.split('/')[1] === '' },
      {
        url: '/about',
        icon: '',
        label: 'About',
        active: pathname.split('/')[1] === 'about',
      },
      {
        url: '/blog/tag',
        icon: '',
        label: 'Blog',
        active: pathname.split('/')[1] === 'blog',
      },
      {
        url: '/project',
        icon: '',
        label: 'Project',
        active: pathname.split('/')[1] === 'project',
      },
    ],
    [pathname],
  )

  return routes
}

export default useSidebarRoutes
