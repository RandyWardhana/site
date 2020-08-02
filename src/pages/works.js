import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import List, { ListItem } from '../components/List'
import Layout from '../layout'

import data from '../data.json'

const Index = () => (
  <Layout>
    <Head>
      <title>Works | Randy Wardhana</title>
    </Head>
    <Navbar currentPage={'WORKS'} />
    <PageTitle>Works</PageTitle>
    <List>
      {data.works.map(item => {
        const title = item.title
        const url = item.url
        const desc = item.description

        return (
          <ListItem
            title={title}
            subtitle={url}
            description={desc}
            // key={item.uid}
            action={url}
            tags={['Reacc', 'Reacc Native']}
          />
        )
      })}
    </List>
  </Layout>
)

export default Index