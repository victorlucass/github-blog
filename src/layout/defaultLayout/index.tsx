import { Outlet } from 'react-router-dom'
import { ContentContainer, HeaderContainer } from './styled'
import logo from '../../assets/logo.svg'
export function DefaultLayout() {
  return (
    <main>
      <HeaderContainer>
        <img src={logo} alt="" />
      </HeaderContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </main>
  )
}
