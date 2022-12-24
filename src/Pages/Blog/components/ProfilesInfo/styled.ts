import styled from 'styled-components'

export const CardInfoName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`
export const LinkStyle = styled.a`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 5px;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 160%;
  color: ${(props) => props.theme.colors.blue};
  &,
  i {
    font-size: ${(props) => props.theme.textSizes['textSize-12']};
  }
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.blue};
  }
`
