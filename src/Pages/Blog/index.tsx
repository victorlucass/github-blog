import { CardComponent } from '../../components/card'
import {
  InfoContainer,
  SubTitleTextStyle,
  TextInfoStyle,
  TitleTextStyle,
} from '../../components/stylesComponent'
import {
  CardAvatar,
  CardComponentContent,
  CardInfoName,
  LinkGitHubStyle,
} from './styled'

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
            <LinkGitHubStyle href="#">
              <span>github</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </LinkGitHubStyle>
          </CardInfoName>
          <TextInfoStyle>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </TextInfoStyle>
          <InfoContainer mt={24}>
            <span>
              <i className="fa-brands fa-github"></i>
              <SubTitleTextStyle>cameronwll</SubTitleTextStyle>
            </span>
            <span>
              <i className="fa-solid fa-building"></i>
              <SubTitleTextStyle>Rocketseat</SubTitleTextStyle>
            </span>
            <span>
              <i className="fa-solid fa-user-group"></i>
              <SubTitleTextStyle>32 seguidores</SubTitleTextStyle>
            </span>
          </InfoContainer>
        </div>
      </CardComponentContent>
    </CardComponent>
  )
}
