import { Link } from 'react-router-dom'
import {
  InformationIconLabel,
  InformationIconLabelType,
} from '../../../../components/informationIconLabel'
import { TitleTextStyle } from '../../../../components/stylesComponent'
import { LinkStyle } from '../../../Blog/components/ProfilesInfo/styled'
import {
  HeaderContentContainer,
  HeaderPostContainer,
  NavListContainer,
} from './styled'

const listIconLabel: InformationIconLabelType[] = [
  {
    classNameIcon: 'fa-brands fa-github',
    labelIcon: 'cameronwll',
  },
  {
    classNameIcon: 'fa-solid fa-calendar-day',
    labelIcon: 'Há 1 dia',
  },
  {
    classNameIcon: 'fa-solid fa-comment',
    labelIcon: '5 comentário',
  },
]

export function HeaderPost() {
  return (
    <HeaderPostContainer>
      <NavListContainer>
        <Link to={'/'}>
          <LinkStyle as={'span'}>
            <i className="fa-solid fa-chevron-left"></i>
            voltar
          </LinkStyle>
        </Link>
        <LinkStyle href="#">
          ver no github
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </LinkStyle>
      </NavListContainer>
      <HeaderContentContainer>
        <TitleTextStyle>
          JavaScript data types and data structures
        </TitleTextStyle>
        <InformationIconLabel listIconLabel={listIconLabel} />
      </HeaderContentContainer>
    </HeaderPostContainer>
  )
}
