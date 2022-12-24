import styled from 'styled-components'

export const HeaderPostContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const NavListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  > a > div {
    display: flex;
    gap: 5px;
    align-items: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 20px;
  }
`
export const HeaderContentContainer = styled.div``
