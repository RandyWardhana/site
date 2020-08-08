import React, { lazy, Suspense } from 'react'

const Navbar = lazy(() => import('../components/Navbar'))
const Header = lazy(() => import('../components/Header'))
const Project = lazy(() => import('../components/Project'))
const Skills = lazy(() => import('../components/Skills'))
const Contact = lazy(() => import('../components/Contact'))
const Footer = lazy(() => import('../components/Footer'))
const Layout = lazy(() => import('../layout'))

import useWindowSize from '../utils/resizeWindowSize'
import { getProjects, getHeader } from '../utils/FirebaseRequest'

const renderLoader = () => <div style={styles.suspenseContainer}><span style={{ fontSize: 24 }}>Loading...</span></div>

const Index = (props) => {
  const size = useWindowSize()
  

  return (
    <Suspense fallback={renderLoader(props.theme)}>
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
    </Suspense>
  )
}

const styles = {
  suspenseContainer: {
    alignItems: 'center',
    background: ({ theme }) => theme.background,
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    width: '100%'
  }
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