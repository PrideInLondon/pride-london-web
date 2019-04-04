import styled from 'styled-components'
import { media } from '../../../../theme/media'
import bgFigureVolunter from '../../../../theme/assets/images/bg-figure-volunteer.jpg'

export const BackgroundVolunteer = styled.div`
  width: 100%;
`
export const ContentVolunteer = styled.div`
  background: url(${bgFigureVolunter}) top right #fc4984 no-repeat;
  background-size: 59% 42%;
  padding: 20px 0 30px;
  color: #fff;
  margin: -20% 20px 0px;
  text-align: center;
  z-index: 99999;
  position: relative;

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
    background-size: 28% 80%;
  `};
`
