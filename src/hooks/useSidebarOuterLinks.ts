import { useMemo } from 'react'
import { BsStackOverflow, BsGithub, BsLinkedin } from 'react-icons/bs'

const useSidebarOuterLinks = () => {
  const links = useMemo(
    () => [
      { label: 'github', logo: BsGithub, url: 'https://github.com/ZekeGan' },
      {
        label: 'linkedin',
        logo: BsLinkedin,
        url: 'https://www.linkedin.com/in/zekegan/',
      },
      {
        label: 'stackoverflow',
        logo: BsStackOverflow,
        url: 'https://stackoverflow.com/users/17560703/zeke-gan',
      },
    ],
    [],
  )

  return links
}

export default useSidebarOuterLinks
