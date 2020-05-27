import styled from 'styled-components'
import { variant, space } from 'styled-system'
import Img, {
  GatsbyImageWithIEPolyfillProps,
} from 'gatsby-image/withIEPolyfill'
import { FluidObject, FixedObject } from 'gatsby-image'

export const Background = styled.div<{ height: string }>`
  position: relative;
  display: absolute;
  width: 100%;
  height: ${props => props.height};
  overflow: hidden;
`
export const ResponsiveImg = styled(Img)<ImageProps>`
  position: absolute !important;
  top: 50%;
  left: 50%;
  height: 100% !important;
  width: 100% !important;
  transform: translate(-50%, -50%);

  img {
    min-height: 100%;
    min-width: 100%;
  }
`

export const StyledSvg = styled.svg<{
  variant: string
}>`
  position: absolute;
  width: 100%;
  z-index: 9;

  ${props => (props.variant === 'top' ? space : null)}
  height: ${props => `${props.height}px`};

  ${variant({
    variants: {
      top: {
        top: 0,
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
`

interface ImageProps extends GatsbyImageWithIEPolyfillProps {
  fluid?: FluidObject
  fixed?: FixedObject
}
