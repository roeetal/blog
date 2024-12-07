interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'in-context learning text-to-sql',
    description: `In this paper, we look at how in-context learning can improve the state-of-the-art performance of LLMs on the text-to-sql task.`,
    imgSrc: '/static/images/marlo.png',
    href: '/blog/marlo',
  },
  {
    title: 'predicting aortic valve stenosis',
    description: `The first deep learning approach to grade aortic stenosis in cardiac ultrasounds, which is vital in point-of-care settings.`,
    imgSrc: '/static/images/aortic-stenosis.png',
    href: 'https://link.springer.com/chapter/10.1007/978-3-030-87583-1_20',
  },
  {
    title: 'another crypto bot',
    description: `I got COVID, so I rested in my bed for a week making an automatic crypto trading algorithm based on a statistical arbitrage strategy.`,
    imgSrc: '/static/images/statistical-arbitrage.jpg',
    href: 'https://github.com/roeetal/traderbot',
  },
  {
    title: 'another Craigslist bot',
    description: `I created a bot to find a bike during COVID, which was not easy because of supply-chain issues.
    The story, and link to repo, is in the post.`,
    imgSrc: '/static/images/tessa.jpg',
    href: '/blog/tessa',
  },
  {
    title: 'neural network robustness certification',
    description: `In this project, we implemented a learning based algorithm to improve the precision of sound zonotope certification.`,
    imgSrc: '/static/images/zonotope.png',
    href: 'https://github.com/tomginsberg/DeepZAdapt',
  },
  {
    title: 'another robot with eyes',
    description: `We built a robot, from scratch, that used YOLOv2 for real-time object detection and navigation.`,
    imgSrc: '/static/images/glalal.png',
    href: 'https://github.com/roeetal/enph253',
  },
]

export default projectsData
