import styled from 'styled-components'

export const InputSearchContainer = styled.section`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const InputSearchContent = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: 700;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
  > span {
    color: ${(props) => props.theme.colors['base-span']};
  }
`
export const InputSearchStyle = styled.input`
  padding: 0.75rem 1rem;
  background: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-border']};
  border-radius: 6px;
  &::placeholder,
  & {
    color: ${(props) => props.theme.colors['base-label']};
  }
  &:focus {
    border: 1px solid ${(props) => props.theme.colors['base-span']};
  }
`
