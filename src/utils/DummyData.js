import {
  CSS, Discord, ExpressJS, Figma, HTML,
  JavaScript, Laravel, MySQL, NextJS, NodeJS,
  PhotoShop, PostgreSQL, ReactJS, Redux, TypeScript,
  StyledComponent
} from '../components/Svg'

const SkillsData = (fill, fillSecondary) => {
  return [
    {
      icon: <ReactJS fill={fill} />,
      caption: 'React Native'
    },
    {
      icon: <ReactJS fill={fill} />,
      caption: 'React JS'
    },
    {
      icon: <Redux fill={fill} />,
      caption: 'Redux'
    },
    {
      icon: <NextJS fill={fill} />,
      caption: 'Next.js'
    },
    // {
    //   icon: <Discord fill={fill} />,
    //   caption: 'Discord.js'
    // },
    {
      icon: <StyledComponent size={64} fill={fill} />,
      caption: 'Styled Components'
    },
    {
      icon: <JavaScript fill={fill} fillSecondary={fillSecondary} />,
      caption: 'JavaScript'
    },
    {
      icon: <CSS fill={fill} fillSecondary={fillSecondary} />,
      caption: 'CSS'
    },
    {
      icon: <HTML fill={fill} fillSecondary={fillSecondary} />,
      caption: 'HTML'
    },
    // {
    //   icon: <Figma fill={fill} />,
    //   caption: 'Figma'
    // },
    // {
    //   icon: <PhotoShop fill={fill} fillSecondary={fillSecondary} />,
    //   caption: 'Adobe PhotoShop'
    // },
    {
      icon: <MySQL fill={fill} />,
      caption: 'MySQL'
    },
    // {
    //   icon: <PostgreSQL fill={fill} fillSecondary={fillSecondary} />,
    //   caption: 'PostgreSQL'
    // },
    {
      icon: <TypeScript fill={fill} fillSecondary={fillSecondary} />,
      caption: 'TypeScript'
    },
    {
      icon: <NodeJS fill={fill} />,
      caption: 'Node.js'
    },
    {
      icon: <ExpressJS fill={fill} />,
      caption: 'Express.JS'
    },
    {
      icon: <Laravel fill={fill} />,
      caption: 'Laravel'
    },
  ]
}

export { SkillsData }