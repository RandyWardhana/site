import React from 'react'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Layout from '../layout'

import useWindowSize from '../utils/resizeWindowSize'
import { getProjects, getHeader } from '../utils/FirebaseRequest'

const Index = (props) => {
  const size = useWindowSize()
  

  return (
    <>
      <Navbar currentPosition={'HOME'} size={size} theme={props.theme} toggle={props.toggle} />
      <Layout>
        <div style={{ margin: '60px auto 0', padding: size.width <= 768 ? '0 32px' : 0 }}>
          <Header data={props.responseHeader} size={size} theme={props.theme} />
          <Project data={props.responseProjects} size={size} />
          <Skills theme={props.theme} />
          <Contact size={size} theme={props.theme} />
          <Footer size={size} theme={props.theme} />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const responseHeader = await getHeader()
  const responseProjects = await getProjects()

  return {
    props: {
      responseHeader,
      responseProjects
    }
  }
}

export default Index