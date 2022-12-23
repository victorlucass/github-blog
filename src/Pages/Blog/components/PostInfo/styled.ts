import styled from 'styled-components'

export const TextareaPostValue = styled.textarea`
  margin-top: 1.25rem;
  min-height: 7rem;
  background: transparent;
  border: none;
  resize: none;
  font-size: 1rem;
  color: ${(props) => props.theme.colors['base-text']};
  padding-right: 0.75rem;
  text-align: justify;
  cursor: initial;
`
