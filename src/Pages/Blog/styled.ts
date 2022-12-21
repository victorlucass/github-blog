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
export const LinkGitHubStyle = styled.a`
  align-self: flex-start;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  color: ${(props) => props.theme.colors.blue};
  > span {
    text-transform: uppercase;
    margin-right: 5px;
  }
  &,
  i {
    font-size: ${(props) => props.theme.textSizes['textSize-12']};
  }
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.blue};
  }
`

export const CardAvatar = styled.img`
  max-height: 9.25rem;
  max-width: 9.25rem;
  border-radius: 8px;
`
