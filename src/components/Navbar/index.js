import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

const Name = styled.h1`
  color: #FFFFFF;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  margin: 8px 0px 0px;
`

const Profession = styled.span`
  color: #888A8E;
  display: block;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`

const Greeting = styled(Profession)`
  font-weight: 300
`

const Links = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0px;
  margin-top: 24px;
  padding: 0px;
`

const StyledLink = styled.li`
  align-self: flex-start;
  flex: none;
  margin: 0px 8px;
  order: 1;
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
  a {
    color: #888A8E;
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    min-width: 43px;
    text-decoration: none;
    transition: all .15s ease-in-out;
    &:hover {
      color: #FFFFFF;
    }
  }
  ${(props) => props.active && css`
    a {
      color: #FFFFFF;
      font-weight: 500;
    }
  `}
`

const Greetings = () => {
  let d = new Date()
  let time = d.getHours()

  switch (true) {
    case time >= 4 && time <= 10:
      return 'Selamat Pagi!'
    case time > 10 && time <= 14:
      return 'Selamat Siang!'
    case time > 14 && time <= 17:
      return 'Selamat Sore!'
    default:
      return 'Selamat Malam!'
  }
}

const Navbar = ({ currentPage }) => (
  <nav>
    <Greeting>{Greetings()}</Greeting>
    <Name>RANDY WARDHANA</Name>
    <Profession>Frontend Engineer</Profession>
    <Links>
      <StyledLink active={currentPage === 'HOME'}>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
      </StyledLink>
      <StyledLink active={currentPage === 'WORKS'}>
        <Link href="/works" passHref>
          <a>Works</a>
        </Link>
      </StyledLink>
      <StyledLink active={currentPage === 'ABOUT'}>
        <Link href="/about" passHref>
          <a>About</a>
        </Link>
      </StyledLink>
    </Links>
  </nav>
)

export default Navbar