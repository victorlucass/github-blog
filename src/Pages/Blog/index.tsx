import { CardComponent } from '../../components/card'
import { InputSearchBlog } from './components/InputSearch'
import { PostInfoBlog } from './components/PostInfo'
import { ProfilesInfoBlog } from './components/ProfilesInfo'
import { CardAvatar, CardComponentContent, CardsInfoContainer } from './styled'

export function BlogPage() {
  return (
    <>
      <CardComponent type="profile">
        <CardComponentContent>
          <CardAvatar
            src="https://github.com/victorlucass.png"
            alt="avatar Victor Lucas"
          />
          <ProfilesInfoBlog />
        </CardComponentContent>
      </CardComponent>
      <InputSearchBlog />
      <CardsInfoContainer>
        <PostInfoBlog />
        <PostInfoBlog />
      </CardsInfoContainer>
    </>
  )
}
