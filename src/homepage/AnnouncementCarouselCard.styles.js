import styled from 'styled-components'
import { media } from '../theme/media'
import { colors } from '../theme/colors'

export const CarouselItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  overflow: hidden;
  transition: transform 0.3s;
`
// export const CarouselItemWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 10px;
//   overflow: hidden;
//   transition: transform 0.3s;

//   &:hover {
//     transform: translateY(-5px);
//   }
// `
export const CardWrapper = styled.div`
  border: 2px solid #e3dfde;
  border-radius: 8px;
  max-width: 383px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`

export const CardImage = styled.img`
  width: 380px;
  height: 270px;
  transition: transform 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }
`
export const CardNoOverflow = styled.div`
  overflow: hidden;
  height: 270px;
`

export const CardTextWrapper = styled.div`
  padding-top: 7px;
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
  height: 80px;
`

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
  z-index: 50;
`

export const CardDesc = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.indigo};
`
export const LinkCardWrapper = styled.a`
  color: #000;
  transition: color 0.15s linear;
  text-decoration: none;
  border-color: #e3dfde;
`
