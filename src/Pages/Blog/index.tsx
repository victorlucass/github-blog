import { CardComponent } from '../../components/card'
import {
  InfoContainer,
  TextInfoStyle,
  TitleTextStyle,
} from '../../components/stylesComponent'
import { CardAvatar, CardComponentContent, CardInfoName } from './styled'

export function BlogPage() {
  return (
    <CardComponent type="profile">
      <CardComponentContent>
        <CardAvatar
          src="https://github.com/victorlucass.png"
          alt="avatar Victor Lucas"
        />
        <div>
          <CardInfoName>
            <TitleTextStyle>Victor Lucas</TitleTextStyle>
            <button>github</button>
          </CardInfoName>
          <TextInfoStyle>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </TextInfoStyle>
          <InfoContainer mt={24}>
            <span>cameronwll</span>
            <span>cameronwll</span>
            <span>cameronwll</span>
          </InfoContainer>
        </div>
      </CardComponentContent>
    </CardComponent>
  )
}
