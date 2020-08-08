import React from 'react'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import 'react-multi-carousel/lib/styles.css'

import { useDarkMode } from '../utils/useDarkMode'
import { lightTheme, darkTheme } from '../utils/Themes'

const Global = createGlobalStyle`
  ::-moz-selection
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.primary};
  }

  ::selection {
    color: ${({ theme }) => theme.background};
    background: ${({ theme }) => theme.primary};
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.secondary};
    font-family: ${({ theme }) => theme.font};
    margin: 0px;
    padding: 0;
    transition: ${({ theme }) => theme.transition};
  }
`

function App({ Component, pageProps }) {
  const [theme, themeToggler ] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const og = {
    name: 'Randy Wardhana',
    description: 'Hi There! I’m Randy Wardhana, a frontend engineer and a weeb',
    image: '/img/bandy.png',
    site: 'https://site-randy.vercel.app'
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Global />
        <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='description' content={og.description} />
          <meta name='image' content={og.image} />
          <meta property='og:title' content={og.name} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={og.site} />
          <meta property='og:image' content={og.image} />
          <meta property='og:image:secure_url' content={og.image} />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='500' />
          <meta property='og:image:height' content='500' />
          <meta property='og:image:alt' content={og.description} />
          <meta property='og:description' content={og.description} />
          <meta property='og:site_name' content={og.name}></meta>
          <meta property='og:updated_time' content='1440432930' />

          <link rel='stylesheet' href='/css/styles.css' />
          <title>Randy Wardhana</title>
        </Head>
        <Component {...pageProps} theme={themeMode} toggle={themeToggler} />
        {/* <button onClick={themeToggler}>Hola</button> */}
      </>
    </ThemeProvider>
  )
}

export default App
