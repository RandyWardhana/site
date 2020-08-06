import React from 'react'
import styled, { css } from 'styled-components'

import { Heart } from '../Svg'

const ContainerHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 96px 0 0;
  
  ${(props) => props.size.width < 768 && css`
    margin: 16px 0 0;
  `}
`

const TitleHeader = styled.p`
  alignSelf: center;
  color: ${({ theme }) => theme.primary};
  display: flex;
  font-weight: 300;
  transition: ${({ theme }) => theme.transition}; 
`

const Author = styled.a`
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  margin: 0 4px;
  text-decoration: none;
`

const Footer = ({ size, theme }) => (
  <ContainerHeader size={size}>
    <TitleHeader>
      Made with&ensp;<Heart fill={theme.primary} />&ensp;by
      <Author
        href="https://github.com/RandyWardhana"
        target="_blank"
        rel="noopener noreferer"
      >
        Randy Wardhana
      </Author>
    </TitleHeader>
  </ContainerHeader>
)

export default Footer