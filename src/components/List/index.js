import React from 'react'
import styled, { css } from 'styled-components'

const List = styled.section`
`

const Item = styled.article`
  margin: 24px 0px;
  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 0px;
  }
  ${(props) => props.clickable && css`
    cursor: pointer;
  `}
`

const Title = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
  margin: 0px;
`

const Subtitle = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #888A8E;
  margin: 4px 0px;
  margin-top: 0px;
  &:last-child {
    margin-bottom: 0px;
  }
`

const Description = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  margin: 8px 0px;
  &:last-child {
    margin-bottom: 0px;
  }
`

const TagContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 8px 0px;
  &:last-child {
    margin-bottom: 0px;
  }
  display: flex;
`

const Tag = styled.li`
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: #FFFFFF;
  padding: 4px;
  background: #6A6A6A;
  border-radius: 4px;
  text-transform: uppercase;
  margin: 0px 4px;
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
`

const ListItem = ({ title, subtitle, description, tags, action }) => {
  const openPage = () => {
    if (action) {
      window.open(action, '_blank')
    }
  }
  return (
    <Item onClick={openPage} clickable={!!action}>
      <Title>{title}</Title>
      {(subtitle && (!action || action !== subtitle) && <Subtitle>{subtitle}</Subtitle>)}
      {(subtitle && action && action === subtitle && <Subtitle as="a" href={action} target="_blank" rel="noreferrer noopener">{subtitle}</Subtitle>)}
      {(description && <Description>{description}</Description>)}
      {(tags && tags.length > 0 && <TagContainer>
        {tags.map(tag => <Tag key={`${title}_${tag}`}>{tag}</Tag>)}
      </TagContainer>)}
    </Item>
  )
}

export default List
export { ListItem }