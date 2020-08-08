import React from 'react'
import styled, { css } from 'styled-components'

import { GitHub, GitLab, WhatsApp, LinkedIn } from '../Svg'

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

const ContainerContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ContainerForm = styled.div`
  width: 48%;
  transition: ${({ theme }) => theme.transition};
  
  ${(props) => props.size.width < 768 && `
    width: 100% !important;
  `}
`

const ContainerSocialMedia = styled(ContainerForm)`
  transition: ${({ theme }) => theme.transition};

  ${(props) => props.size.width < 768 && `
    margin: 32px 0;
    text-align: center;
  `}
`

const FormContent = styled.div`
  margin-bottom: 16px;

  label {
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    font-weight: 300;
  }
`

const Subject = styled.input`
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.background};
  font-family: ${({ theme }) => theme.font};
  margin: 8px 0;
  outline: none;
  padding: 12px 8px;
  width: 95%;
  
  &::placeholder {
    color: ${({ theme }) => theme.background};
  }
`

const Content = styled.textarea`
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.background};
  font-family: ${({ theme }) => theme.font};
  margin: 8px 0;
  max-height: 160px;
  max-width: 95%;
  min-height: 72px;
  min-width: 95%;
  outline: none;
  padding: 12px 8px;

  &::placeholder {
    color: ${({ theme }) => theme.background};
  }
`

const Submit = styled.div`
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font};
  margin: 8px 0;
  outline: none;
  padding: 12px 0;
  text-align: center;
  width: 50%;
  
  a {
    color: ${({ theme }) => theme.background};
    text-decoration: none;
  }
`

const Url = styled.a`
  display: flex;
  text-decoration: none;

  ${(props) => props.mobile && css`
    margin: 16px;
  `}
`

const SocialMediaContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-left: 32px;
`

const SocialMediaTextContainer = styled.div`
  flex-direction: column;
  margin-left: 16px;
`

const SocialMediaLabel = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: 300;
  margin-block-end: 0;
  margin-block-start: 0;
`

const SocialMediaValue = styled(SocialMediaLabel)`
  font-weight: 500;
  margin-top: 4px;
`

const MobileSocialMedia = styled.div`
  align-items: center;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
`


const Contact = ({ size, theme }) => {
  const [subject, setSubject] = React.useState('')
  const [textArea, setTextArea] = React.useState('')

  const data = [
    {
      title: 'GitHub',
      name: 'RandyWardhana',
      icon: <GitHub fill={theme.primary} />,
      url: 'https://github.com/RandyWardhana',
    },
    {
      title: 'GitLab',
      name: 'randy_w',
      icon: <GitLab fill={theme.primary} />,
      url: 'https://gitlab.com/randy_w',
    },
    {
      title: 'Phone / WhatsApp',
      name: '+62 813 8104 9196',
      icon: <WhatsApp fill={theme.primary} />,
      url: 'https://api.whatsapp.com/send?phone=6281381049196',
    },
    {
      title: 'LinkedIn',
      name: 'Randy Wardhana',
      icon: <LinkedIn fill={theme.primary} />,
      url: 'https://www.linkedin.com/in/randy-wardhana-a7b1a017a/',
    },
  ]

  const renderSocialMedia = () => {
    return (
      data.map((item, index) => {
        return (
          <SocialMediaContainer key={index}>
            <Url mobile={false} href={item.url} target="_blank" rel="noopener noreferer">
              {item.icon}
              <SocialMediaTextContainer>
                <SocialMediaLabel>{item.title}</SocialMediaLabel>
                <SocialMediaValue>{item.name}</SocialMediaValue>
              </SocialMediaTextContainer>
            </Url>
          </SocialMediaContainer>
        )
      })
    )
  }

  const renderMobileSocialMedia = () => {
    return (
      <MobileSocialMedia>
        {data.map((item, index) => {
          return (
            <Url mobile={true} key={index} href={item.url} target="_blank" rel="noopener noreferer">
              {item.icon}
            </Url>
          )
        })}
      </MobileSocialMedia>
    )
  }

  const sendData = () => {
    if (textArea.trim() !== '') window.open(`mailto:randywardhana37@gmail.com?subject=${subject}&body=${textArea}`)
  }

  return (
    <>
      <ContainerHeader id="contact">
        <TitleHeader>CONTACT</TitleHeader>
      </ContainerHeader>
      <ContainerContent>
        <ContainerForm size={size}>
          <FormContent>
            <label htmlFor='subject'>Subject</label>
            <Subject
              id='subject'
              name='subject'
              onChange={(e) => setSubject(e.target.value)}
              placeholder='Subject (Optional)'
              type='text'
              value={subject}
            />
          </FormContent>
          <FormContent>
            <label htmlFor='message'>Message</label>
            <Content
              id='message'
              name='message'
              onChange={(e) => setTextArea(e.target.value)}
              placeholder='Message'
              rows={4}
              value={textArea}
            />
          </FormContent>
          <Submit>
            {/* <a href="mailto:randywardhana37@gmail.com?body='hai'"> */}
            <a onClick={() => sendData()}>
              Submit
            </a>
          </Submit>
        </ContainerForm>
        <ContainerSocialMedia size={size}>
          {size.width < 768 ? renderMobileSocialMedia() : renderSocialMedia()}
        </ContainerSocialMedia>
      </ContainerContent>
    </>
  )
}

export default Contact