import styled from 'styled-components'
import { media } from '../theme/media'
import bgFigureVolunter from './volunteerShapes.svg'
import volunteerBg from './volunteerBackground.jpg'
import volunteerBgMobile from './volunteerBackgroundMobile.jpg'

export const BackgroundVolunteer = styled.div`
  width: 100%;
  background-image: url(${volunteerBgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 270px;

  ${media.tablet`
    background-image: url(${volunteerBg});
    height: 400px;
  `};
`
export const ContentVolunteer = styled.div`
  background: url(${bgFigureVolunter}) top right #fc4984 no-repeat;
  padding: 20px 0 40px;
  color: #fff;
  margin-top: -20%;
  text-align: center;
  border-radius: 7px;
  background-size: 90% 90%;

  h2 {
    color: #fff;
    margin: 20px;
    font-size: 26px;
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
    margin-top: -10%;
  `};

  ${media.tabletMax`
    background-size: 58% 42%;
  `}
`
