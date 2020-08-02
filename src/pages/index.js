import React from 'react'

import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import Layout from '../layout'

const Index = () => (
  <Layout>
    <Navbar currentPage={'HOME'} />
    <PageTitle>
      Hello!<br />
      I'm Randy Wardhana, a frontend engineer and also a weeb
    </PageTitle>
  </Layout>
)

export default Index