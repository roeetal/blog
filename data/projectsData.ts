interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Another Craigslist Bot',
    description: `I created a bot to find a bike during COVID, which was not easy because of supply-chain issues.
    The story, and link to repo, is in the post.`,
    imgSrc: '/static/images/tessa.jpg',
    href: '/blog/tessa',
  },
]

export default projectsData
