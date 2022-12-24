import {
  InformationIconLabel,
  InformationIconLabelType,
} from '../../../../components/informationIconLabel'
import {
  TitleTextStyle,
  TextInfoStyle,
} from '../../../../components/stylesComponent'
import { CardInfoName, LinkStyle } from './styled'

const listIconLabel: InformationIconLabelType[] = [
  {
    classNameIcon: 'fa-brands fa-github',
    labelIcon: 'cameronwll',
  },
  {
    classNameIcon: 'fa-solid fa-building',
    labelIcon: 'Rocketseat',
  },
  {
    classNameIcon: 'fa-solid fa-user-group',
    labelIcon: '32 seguidores',
  },
]

export function ProfilesInfoBlog() {
  return (
    <section>
      <CardInfoName>
        <TitleTextStyle>Victor Lucas</TitleTextStyle>
        <LinkStyle href="#">
          github
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </LinkStyle>
      </CardInfoName>
      <TextInfoStyle>
        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
        massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
        vel mass.
      </TextInfoStyle>
      <InformationIconLabel listIconLabel={listIconLabel} />
    </section>
  )
}
