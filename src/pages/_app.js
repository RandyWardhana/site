import React from 'react'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  body {
    background: #2F3136;
    color: #888A8E;
    font-family: Rubik;
    margin: 0px;
  }
`

function App({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Head>
        <title>Randy Wardhana</title>
        <meta name="description" content="Hi There! I’m Randy Wardhana, a frontend engineer and a weeb" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
