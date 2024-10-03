interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'another Craigslist bot',
    description: `I created a bot to find a bike during COVID, which was not easy because of supply-chain issues.
    The story, and link to repo, is in the post.`,
    imgSrc: '/static/images/tessa.jpg',
    href: '/blog/tessa',
  },
  {
    title: 'another robot with eyes',
    description: `We built a robot, from scratch, that used YOLOv2 for real-time object detection and navigation.`,
    imgSrc: '/static/images/glalal.png',
    href: 'https://github.com/roeetal/enph253',
  },
  {
    title: 'neural network robustness certification',
    description: `In this project, we implemented a learning based algorithm to improve the precision of sound zonotope certification.`,
    href: 'https://github.com/tomginsberg/DeepZAdapt',
  },
  {
    title: 'another crypto bot',
    description: `I got COVID, so I rested in my bed for a week making an automatic crypto trading algorithm based on a statistical arbitrage strategy.`,
    href: 'https://github.com/roeetal/traderbot',
  },
]

export default projectsData
