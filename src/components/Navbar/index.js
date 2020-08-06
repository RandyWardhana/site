import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

import { Menu } from '../Svg'

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  box-shadow: 0 2px 4px 0 rgba(136, 138, 142, 0.15);
  display: flex;
  position: fixed;
  margin: 0;
  padding: 0;
  transition: ${({ theme }) => theme.transition};
  width: 100%;
  z-index: 999;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  width: 100%;

  @media (max-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

const MenuContainer = styled.div`
  align-items: center;
  display: flex;
`

const StyledLink = styled.p`
  margin-block-end: 0;
  margin-block-start: 0;
  
  a {
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
  }
  ${(props) => props.lastChild && css`
    a {
      margin-right: 0
    }
  `}
  ${(props) => props.active && css`
    a {
      color: ${({ theme }) => theme.primary};
      font-weight: 500;
    }
  `}
`

const Navbar = ({ currentPosition, size, theme }) => (
  <>
    <nav>
      <Container>
        <Content>
          <MenuContainer>
            <StyledLink active={currentPosition === 'HOME'} lastChild={false}>
              <Link href="/" passHref>
                <a style={{ color: theme.primary, fontWeight: '700' }}>RANDY</a>
              </Link>
            </StyledLink>
          </MenuContainer>
          {size.width <= 576 && (
            <Menu space={16} fill={theme.primary} />
          )}
          {size.width > 576 && (
            <div style={{ display: 'flex' }}>
              <StyledLink active={currentPosition === 'PROJECT'} lastChild={false}>
                <Link href="/#project" passHref>
                  <a>Project</a>
                </Link>
              </StyledLink>
              <StyledLink active={currentPosition === 'SKILLS'} lastChild={false}>
                <Link href="/#skills" passHref>
                  <a>Skills</a>
                </Link>
              </StyledLink>
              <StyledLink active={currentPosition === 'CONTACT'} lastChild={true}>
                <Link href="/#contact" passHref>
                  <a>Contact</a>
                </Link>
              </StyledLink>
            </div>
          )}
        </Content>
      </Container>
    </nav>
  </>
)

export default Navbar