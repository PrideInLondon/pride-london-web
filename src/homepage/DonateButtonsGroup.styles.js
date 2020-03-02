import styled from 'styled-components'
import { media } from '../theme/media'

export const ButtonsContainer = styled.div`
  display: flex;
  width: 76%;
  max-width: 240px;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-height: 160px;

  ${media.tablet`
    width: 96%;
    max-width: unset;
    flex-direction: row;
    min-height: unset;
  `};

  a {
    min-width: 66px;
    font-weight: 600;
    padding: 12px;

    ${media.tablet`
      min-width: 80px;
    `};
  }

  span {
    color: #fff;
    font-weight: 600;
  }
`
export const ButtonSingle = styled.div`
  a {
    ${media.tablet`
      font-weight: 600;
      font-size: 16px;
    `};
  }
`

export const ButtonsGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${media.tablet`
    width: 45%;
  `};
`
