import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'

import { Menu, Sun, Moon, Close } from '../Svg'

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
  ${(props) => props.active && css`
    a {
      color: ${({ theme }) => theme.primary};
      font-weight: 500;
    }
  `}
  ${(props) => props.mobile && css`
    padding: 12px 16px;
  `}
`

const Modal = styled.div`
  background: ${({ theme }) => theme.primary};
  position: fixed;
  transition: ${({ theme }) => theme.transition};
  width: 100%;
  z-index: 1000;

  span {
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 16px;
  }
`

const Navbar = ({ currentPosition, size, theme, toggle }) => {
  const [open, setOpen] = React.useState(false)

  const handleMenu = () => {
    setOpen(!open)
  }

  document.body.style.overflowY = open ? 'hidden' : 'auto'

  return (
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
              <span style={{ transition: theme.transition }} onClick={() => handleMenu()}>
                <Menu space={16} size={20} fill={theme.primary} />
              </span>
            )}
            {size.width > 576 && (
              <div style={{ display: 'flex' }}>
                <StyledLink>
                  <Link href="/#project" passHref>
                    <a>Project</a>
                  </Link>
                </StyledLink>
                <StyledLink>
                  <Link href="/#skills" passHref>
                    <a>Skills</a>
                  </Link>
                </StyledLink>
                <StyledLink>
                  <Link href="/#contact" passHref>
                    <a>Contact</a>
                  </Link>
                </StyledLink>
                <span style={{ alignItems: 'center', cursor: 'pointer', display: 'flex' }} onClick={toggle}>
                  {theme.theme == 'light' ? <Moon size={20} fill={theme.secondary} /> : <Sun size={20} fill={theme.secondary} />}
                </span>
              </div>
            )}
          </Content>
        </Container>
      </nav>
      {open &&
        <Modal>
          <span style={{ justifyContent: 'flex-end' }} onClick={() => handleMenu()}>
            <Close space={16} size={20} fill={theme.background} />
          </span>
          <StyledLink onClick={() => handleMenu()} mobile>
            <Link href="/#project" passHref>
              <a>Project</a>
            </Link>
          </StyledLink>
          <StyledLink onClick={() => handleMenu()} mobile>
            <Link href="/#skills" passHref>
              <a>Skills</a>
            </Link>
          </StyledLink>
          <StyledLink onClick={() => handleMenu()} mobile>
            <Link href="/#contact" passHref>
              <a>Contact</a>
            </Link>
          </StyledLink>
          <span style={{ marginBottom: 16 }} onClick={toggle}>
            {theme.theme == 'light' ? <Moon size={16} fill={theme.secondary} /> : <Sun size={20} fill={theme.secondary} />}
          </span>
        </Modal>
      }
    </>
  )
}

export default Navbar