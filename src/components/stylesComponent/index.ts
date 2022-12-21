import styled from 'styled-components'

export const TextInfoStyle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.theme.textSizes['textSize-16']};
  line-height: 160%;
  color: ${(props) => props.theme.colors['base-text']};
`
export const TitleTextStyle = styled.strong`
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => props.theme.textSizes['textSize-24']};
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

export const InfoContainer = styled.div<{ mt: number }>`
  display: flex;
  gap: 1.5rem;
  margin-top: ${(props) => props.mt + 'px'};
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
