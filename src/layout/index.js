import styled from 'styled-components'

const DefaultLayout = styled.div`
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 96px auto 96px 256px;
  box-sizing: border-box;
  @media (max-width: 1152px) {
    margin: 96px auto;
  }
  @media (max-width: 832px) {
    margin: 96px;
  }
  @media (max-width: 768px) {
    margin: 0px;
    padding: 96px 48px;
  }
  @media (max-width: 480px) {
    padding: 96px 32px;
  }
  & > * {
    margin: 16px 0px;
    &:first-child {
      margin-top: 0px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
`

export default DefaultLayout