import Logo from '../../assets/logo-blog.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
    </HeaderContainer>
  )
}