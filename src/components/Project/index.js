import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const ContainerHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`

const TitleHeader = styled.h1`
  color: ${({ theme }) => theme.primary};
  transition: ${({ theme }) => theme.transition};
`

const SeeMore = styled.a`
  color: ${({ theme }) => theme.secondary};
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  margin-right: 16px;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  ${(props) => props.size.width < 425 && `
    display: none
  `}
`

const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Content = styled.div`
  cursor: pointer;
  padding-bottom: 32px;
  width: 48%;

  ${(props) => props.index == 0 ? `
    margin-left: 0;
  ` : `
    margin-left: ${props.index % 2 !== 0 ? '16px !important' : 0};
  `}

  ${(props) => props.size.width < 768 && `
    width: 100% !important;
    margin: 0 !important;
  `}
`

const ImageContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 8px;
  height: 160px;
  width: 100%;
`

const Image = styled.img`
  border-radius: 8px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`

const Title = styled.p`
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
  font-weight: 500;
  margin-top: 8px !important;
  margin-block-end: 0;
  margin-block-start: 0;
  transition: ${({ theme }) => theme.transition};
`

const Truncate = styled.div`
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  margin: 0 0 1em 0;
  overflow: hidden;
`

const Description = styled(Title)`
  color: ${({ theme }) => theme.secondary};
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`

const data = [
  {
    image: '/img/avatar.jpeg',
    title: 'RegoPantes',
    description: 'RegoPantes: Solusi perdagangan online produk pertanian langsung dari petani ke konsumen dengan harga yang pantas untuk semua pihak #MembeliItuMembantu',
  },
  {
    image: '/img/avatar.jpeg',
    title: 'RegoPantes',
    description: 'RegoPantes: Solusi perdagangan online produk pertanian langsung dari petani ke konsumen dengan harga yang pantas untuk semua pihak #MembeliItuMembantu',
  },
  {
    image: '/img/avatar.jpeg',
    title: 'RegoPantes',
    description: 'RegoPantes: Solusi perdagangan online produk pertanian langsung dari petani ke konsumen dengan harga yang pantas untuk semua pihak #MembeliItuMembantu',
  },
  {
    image: '/img/avatar.jpeg',
    title: 'RegoPantes',
    description: 'RegoPantes: Solusi perdagangan online produk pertanian langsung dari petani ke konsumen dengan harga yang pantas untuk semua pihak #MembeliItuMembantu',
  },
]

const Project = ({ size }) => (
  <>
    <ContainerHeader>
      <TitleHeader>PROJECT</TitleHeader>
      <SeeMore
        size={size}
        href="https://github.com/RandyWardhana"
        target="_blank"
        rel="noopener noreferer"
      >
        See More on Github
      </SeeMore>
    </ContainerHeader>
    <ContainerContent>
      {data.map((item, index) => {
        return (
          <Content key={index} size={size} index={index}>
            <ImageContainer>
              <Image alt={item.title} src={item.image} />
            </ImageContainer>
            <Title>{item.title}</Title>
            <Truncate>
              <Description>{item.description}</Description>
            </Truncate>
          </Content>
        )
      })}

      <SeeMore
        size={size}
        href="https://github.com/RandyWardhana"
        target="_blank"
        rel="noopener noreferer"
        style={{ display: size.width < 425 ? 'inline-block' : 'none' }}
      >
        See More on Github
      </SeeMore>
    </ContainerContent>
  </>
)

export default Project