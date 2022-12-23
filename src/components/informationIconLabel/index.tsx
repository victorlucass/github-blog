import { SubTitleTextStyle } from '../stylesComponent'
import { InfoContainer } from './styled'

export interface InformationIconLabelType {
  classNameIcon: string
  labelIcon: string
}

export interface InformationIconLabelProps {
  listIconLabel: InformationIconLabelType[]
  options?: { mt: number }
}

export function InformationIconLabel({
  listIconLabel,
  options,
}: InformationIconLabelProps) {
  return (
    <InfoContainer mt={options?.mt}>
      {listIconLabel.map((item) => {
        return (
          <span key={item.classNameIcon}>
            <i className={item.classNameIcon}></i>
            <SubTitleTextStyle>{item.labelIcon}</SubTitleTextStyle>
          </span>
        )
      })}
    </InfoContainer>
  )
}
