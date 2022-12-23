import {
  InputSearchContainer,
  InputSearchContent,
  InputSearchStyle,
} from './styled'

export function InputSearch() {
  return (
    <InputSearchContainer>
      <InputSearchContent>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </InputSearchContent>
      <InputSearchStyle type="text" placeholder="Buscar conteúdo" />
    </InputSearchContainer>
  )
}
