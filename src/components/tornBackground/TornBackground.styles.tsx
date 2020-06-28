import styled from 'styled-components'
import { variant } from 'styled-system'
import bannerBackground from '../../campaigns/youMeUsWe/assets/banner/background.jpg'

export const StyledSvg = styled.svg<{
  variant: string
}>`
  position: absolute;
  width: 100%;
  z-index: 2;

  height: ${props => `${props.height}px`};

  ${variant({
    variants: {
      top: {
        transform: 'scaleY(-1);',
      },
      bottom: {
        bottom: 0,
      },
    },
  })}
`

export const RelativeTornSection = styled.section`
  position: relative;
  height: 100%;
`
export const AbsoluteTornSection = styled.section`
  position: absolute;
  z-index: 12;
  width: 100%;
`

export const ExampleBackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerBackground});
  background-size: cover;
  width: 100%;
  height: 560px;
`
