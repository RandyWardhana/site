import styled from 'styled-components'

const DefaultLayout = styled.div`
  padding: 32px 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media (max-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export default DefaultLayout