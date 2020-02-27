import styled from 'styled-components'
import { media } from '../theme/media'
import bgFigureVolunter from '../theme/assets/images/volunteer-shapes.svg'
import volunteerBg from '../theme/assets/images/volunteer-bg.jpg'
import volunteerBgMobile from '../theme/assets/images/volunteer-bg-mobile.jpg'

export const BackgroundVolunteer = styled.div`
  width: 100%;
  background-image: url(${volunteerBgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 270px;
  margin-top: 50px;

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
    margin-top: -10%;
  `};

  h2 {
    font-size: 26px;
  }

  ${media.tabletMax`
    background-size: 58% 42%;
  `}
`
