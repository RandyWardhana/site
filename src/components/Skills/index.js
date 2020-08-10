import React from 'react'
import styled, { css } from 'styled-components'
import Carousel from 'react-multi-carousel'

import { SkillsData } from '../../utils/DummyData'

const ContainerHeader = styled.div`
  align-items: center;
  display: flex;
  margin: 16px 0;
  padding: 16px 0;
  transition: ${({ theme }) => theme.transition}; 
  `

const TitleHeader = styled.h1`
  color: ${({ theme }) => theme.primary};
  transition: ${({ theme }) => theme.transition}; 
`

const SwiperContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Img = styled.img`
  object-fit: cover;
`

const Skill = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 400;
  transition: ${({ theme }) => theme.transition};
`

const CustomDotItem = styled.li`
  background: ${({ theme }) => theme.secondary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 0 8px;
  padding: 8px;
  outline: none;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background: ${({ theme }) => theme.primary};
  }

  ${(props) => props.active && css`
    background: ${({ theme }) => theme.primary};
  `}
`

const responsive = {
  desktop: {
    breakpoint: { max: 15360, min: 1024 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 375 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 374, min: 0 },
    items: 2,
    slidesToSlide: 2
  }
}

const CustomDot = ({ onClick, active }) => (
  <CustomDotItem
    active={active}
    onClick={e => {
      onClick();
      e.preventDefault();
    }} />
)

const Skills = ({ theme, data }) => (
  <>
    <ContainerHeader id="skills">
      <TitleHeader>SKILLS</TitleHeader>
    </ContainerHeader>
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true}
      keyBoardControl={true}
      renderDotsOutside={true}
      customTransition="all .5s ease-in-out"
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customDot={<CustomDot />}
    >
      {SkillsData(theme.primary, theme.background).map((item, index) => (
        <SwiperContainer key={index}>
          {item.icon}
          <Skill>{item.caption}</Skill>
        </SwiperContainer>
      ))}
    </Carousel>
  </>
)

export default Skills