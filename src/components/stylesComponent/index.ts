import styled from 'styled-components'

export const TextInfoStyle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.textSizes['textSize-16']};
  line-height: 160%;
  color: ${(props) => props.theme.colors['base-text']};
`
export const TitleTextStyle = styled.strong<{ fontSizeText?: number }>`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) =>
    props.fontSizeText + 'px' || props.theme.textSizes['textSize-24']};
  line-height: 130%;
  color: ${(props) => props.theme.colors['base-title']};
`

export const SubTitleTextStyle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.textSizes['textSize-16']};
  line-height: 160%;
  color: ${(props) => props.theme.colors['base-subtitle']};
`
export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors['base-post']};
  min-height: 16.25rem;
  border-radius: 10px;
  padding: 2rem;
  margin: 3rem 0;
`
export const CardInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 0.875rem;
    min-width: 4rem;
    text-align: end;
  }
`
