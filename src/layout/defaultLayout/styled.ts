import styled from 'styled-components'
import headerBg from '../../assets/header-bg.svg'
export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContentContainer = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  margin-top: -4.5rem;
`
