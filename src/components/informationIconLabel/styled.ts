import styled from 'styled-components'

export const InfoContainer = styled.div<{ mt?: number }>`
  display: flex;
  gap: 1.5rem;
  margin-top: ${(props) => (props.mt ? props.mt + 'px' : '24px')};
  > span {
    i {
      color: ${(props) => props.theme.colors['base-label']};
    }
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
  }
`
