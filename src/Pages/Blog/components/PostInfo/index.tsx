import {
  CardInfoContainer,
  CardInfoHeader,
  TitleTextStyle,
} from '../../../../components/stylesComponent'
import { TextareaPostValue } from './styled'

export function PostInfoBlog() {
  return (
    <>
      <CardInfoContainer>
        <CardInfoHeader>
          <TitleTextStyle fontSizeText={24}>
            JavaScript data types and data structures
          </TitleTextStyle>
          <span>Há 1 dia</span>
        </CardInfoHeader>
        <TextareaPostValue
          readOnly
          value="Os exemplos acima demonstram vários recursos do <textarea>. O primeiro exemplo mostra o uso mais simples, com apenas um id atributo para permitir que o<textarea> estar associado a um <label> elemento para..."
        ></TextareaPostValue>
      </CardInfoContainer>
    </>
  )
}
