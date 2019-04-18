import styled from 'styled-components'
import { media } from '../../../../theme/media'
import bgFigureVolunter from '../../../../theme/assets/images/volunteer-shapes.svg'

export const BackgroundVolunteer = styled.div`
  width: 100%;
`
export const ContentVolunteer = styled.div`
  background: url(${bgFigureVolunter}) top right #fc4984 no-repeat;
  padding: 20px 0 40px;
  color: #fff;
  margin: -20% 20px 0px;
  text-align: center;
  z-index: 2;
  position: relative;
  border-radius: 7px;
  background-size: 90% 90%;

  h2 {
    color: #fff;
    margin: 20px;
    font-size: 32px;
    font-weight: bold;
  }

  p {
    margin: 0 auto 40px;
    max-width: 74%;
    line-height: 24px;
    font-size: 18px;
  }

  ${media.tablet`
    p {
      margin: 0 auto 25px;
      max-width: 60%;
      font-size: 22px;
    }
    margin: -10% 6% 0px 6%;
  `};

  h2 {
    font-size: 26px;
  }

  ${media.tabletMax`
    background-size: 58% 42%;
  `}
`
