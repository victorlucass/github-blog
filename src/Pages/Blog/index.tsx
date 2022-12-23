import { CardComponent } from '../../components/card'
import { ProfilesInfo } from './components/ProfilesInfo'
import { CardAvatar, CardComponentContent } from './styled'

export function BlogPage() {
  return (
    <CardComponent type="profile">
      <CardComponentContent>
        <CardAvatar
          src="https://github.com/victorlucass.png"
          alt="avatar Victor Lucas"
        />
        <ProfilesInfo />
      </CardComponentContent>
    </CardComponent>
  )
}
