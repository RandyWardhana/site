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
  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  const og = {
    name: 'Randy Wardhana',
    description: 'Hi There! I’m Randy Wardhana, a frontend engineer and a weeb',
    image: 'https://firebasestorage.googleapis.com/v0/b/site-randy.appspot.com/o/avatar%2Fbandy.png?alt=media&token=ba3bab28-929d-4ec1-acb0-0a25450f656a',
    site: 'https://site-randy.vercel.app'
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Global />
        <Head>
          <meta charSet='UTF-8' />
          <meta name="next-head-count" />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='description' content={og.description} />
          <meta name="theme-color" content='#2F3136' />

          <meta property="og:locale" content="en_US" />
          <meta property='og:title' content={og.name} />
          <meta property='og:type' content='website' />
          <meta property='og:url' content={og.site} />
          <meta property='og:image' content={og.image} />
          <meta property='og:image:secure_url' content={og.image} />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='500' />
          <meta property='og:image:height' content='500' />
          <meta property='og:image:alt' content={og.name} />
          <meta property='og:description' content={og.description} />
          <meta property='og:site_name' content={og.name} />
          <meta property="og:type" content="website" />

          <meta name="twitter:title" content={og.title} />
          <meta name="twitter:site" content="@randywardhana3" />
          <meta name="twitter:site:id" content="@randywardhana3 " />
          <meta name="twitter:creator" content="@randywardhana3" />
          <meta name="twitter:description" content={og.description} />
          <meta name="twitter:image" content={og.image} />

          <meta name="branch:deeplink:$desktop_url" content={og.site} />
          <meta name="branch:deeplink:$ios_deeplink_path" content={og.name} />
          <meta name="branch:deeplink:$android_deeplink_path" content={og.name} />

          <link rel='stylesheet' href='/css/styles.css' />
          <title>Randy Wardhana</title>
        </Head>
        <Component {...pageProps} theme={themeMode} toggle={themeToggler} />
      </>
    </ThemeProvider>
  )
}

export default App
