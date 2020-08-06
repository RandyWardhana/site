import React from 'react'
import styled, { css } from 'styled-components'

import { Download } from '../Svg'

import Greetings from '../../utils/greetings'

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  margin: 32px 0;
  
  ${(props) => props.size.width < 768 && css`
    justify-content: center;
  `}
`

const ProfileContainer = styled.div`
  flex-direction: column;

  ${(props) => props.size.width < 768 && css`
    text-align: center;
  `}
`

const Greeting = styled.p`
  font-weight: 400;
`

const Name = styled.h1`
  margin-block-end: 0;
  margin-block-start: 0;
  transition: ${({ theme }) => theme.transition};
`

const FullName = styled.span`
  color: ${({ theme }) => theme.primary};
  margin-left: 8px;
  transition: ${({ theme }) => theme.transition};
  width: 50px;

  ${(props) => props.size.width < 768 && css`
    width: auto;
  `}
`

const Profession = styled.p`
  font-size: 20px;
`

const DownloadCV = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  outline: none;
  padding: 8px 16px;

  ${(props) => props.size.width < 768 && css`
    margin: 0 auto;
  `}
`

const DownloadText = styled.span`
  color: ${({ theme }) => theme.primary};
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  margin-left: 16px;
  transition: ${({ theme }) => theme.transition};
`

const ImageContainer = styled.div`
  height: 400px;
  margin-right: 64px;
  width: 400px;
  `

const Img = styled.img`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: 100%;
  object-fit: cover;
  width: 100%;
`

const Header = ({ size, theme, toggle }) => (
  <Container size={size}>
    <ProfileContainer size={size}>
      {/* <Greeting>{Greetings().id.toUpperCase()}</Greeting> */}
      <Greeting>{Greetings().en.toUpperCase()}</Greeting>
      {/* <Greeting>{Greetings().jp.toUpperCase()}</Greeting> */}
      <Name>
        I'm
      <FullName size={size}>Randy Wardhana</FullName>
      </Name>
      <Profession>Frontend Engineer</Profession>
      <DownloadCV size={size} onClick={toggle}>
        <Download fill={theme.primary} />
        <DownloadText>Download CV</DownloadText>
      </DownloadCV>
    </ProfileContainer>
    {size.width >= 768 &&
      <ImageContainer>
        <Img alt='Randy Wardhana' src='/img/bandy.png' />
      </ImageContainer>
    }
  </Container>
)

export default Header