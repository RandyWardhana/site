import React from 'react'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import 'react-multi-carousel/lib/styles.css'

import { useDarkMode } from '../utils/useDarkMode'
import { lightTheme, darkTheme } from '../utils/Themes'
import Meta from '../utils/Meta'

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

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Global />
        <Meta />
        <Component {...pageProps} theme={themeMode} toggle={themeToggler} />
      </>
    </ThemeProvider>
  )
}

export default App
