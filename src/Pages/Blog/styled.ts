import styled from 'styled-components'

export const CardComponentContent = styled.div`
  display: flex;
  gap: 2rem;
  > div {
    flex: 1;
  }
`
export const CardAvatar = styled.img`
  max-height: 9.25rem;
  max-width: 9.25rem;
  border-radius: 8px;
`
export const CardsInfoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
