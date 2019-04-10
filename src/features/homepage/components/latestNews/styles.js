import styled from 'styled-components'
import { default as LatestNewsCardOryg } from './latestNewsCard'
export const Bacground = styled.div`
  display: flex;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 250px;
  position: relative;
  border-radius: 4px;
`
export const LatestNewsCardContainer = styled.div`
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 0;
  max-width: 616px;
`

export const LatestNewsCard = styled(LatestNewsCardOryg)`
  min-height: unset;
  & > div:nth-child(1) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    &>div: nth-child(1) {
      margin-bottom: 0;
      margin-right: 10px;
    }
  }
`
