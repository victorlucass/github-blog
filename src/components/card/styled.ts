import styled from 'styled-components'

interface CardMainContainerProps {
  type: string
}
export const CardMainContainer = styled.div<CardMainContainerProps>`
  padding: 2rem;
  background: ${(props) => props.theme.colors['base-profile']};
  min-height: ${(props) => (props.type === 'info' ? '168px' : '212px')};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
