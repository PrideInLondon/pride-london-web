import styled from 'styled-components'
import bgFigureVolunter from '../../../../theme/assets/images/bg-figure-volunteer.jpg'

export const ContentVolunteer = styled.div`
  background: url(${bgFigureVolunter}) top right #fc4984 no-repeat;
  width: 100%;
  background-size: 28% 80%;
  padding-bottom: 60px;
  color: #fff;
  text-align: center;
  & h2 {
    color: #fff;
    margin-bottom: 10px;
  }
  & p {
    margin: 0 auto 40px;
    max-width: 50%;
    font-size: 22px;
  }
`
