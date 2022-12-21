import styled from 'styled-components'

export const TextInfoStyle = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.textSizes['textSize-16']};
  line-height: 160%;
  color: ${(props) => props.theme.colors['base-text']};
`
export const TitleTextStyle = styled.strong`
  font-family: ${(props) => props.theme.fonts.regular};
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.textSizes['textSize-24']};
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-title']};
`
export const InfoContainer = styled.div<{ mt: number }>`
  display: flex;
  gap: 1.5rem;
  margin-top: ${(props) => props.mt + 'px'};
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
  }
`
