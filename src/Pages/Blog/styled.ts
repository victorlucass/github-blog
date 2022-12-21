import styled from 'styled-components'

export const CardComponentContent = styled.div`
  display: flex;
  gap: 2rem;
  > div {
    flex: 1;
  }
`
export const CardInfoName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`
export const CardAvatar = styled.img`
  max-height: 9.25rem;
  max-width: 9.25rem;
  border-radius: 8px;
`
