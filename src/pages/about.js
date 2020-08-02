import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Layout from '../layout'

const Index = () => (
  <Layout>
    <Head>
      <title>About | Randy Wardhana</title>
    </Head>
    <Navbar currentPage={'ABOUT'} />
    <PageTitle>About</PageTitle>
  </Layout>
)

export default Index