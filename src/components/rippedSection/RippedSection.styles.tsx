import styled from 'styled-components'
import { layout } from 'styled-system'
// import Img, {
//   GatsbyImageWithIEPolyfillProps,
// } from 'gatsby-image/withIEPolyfill'

export const StyledSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${layout}
`

// export const AbsoluteTornSection = styled.section`
//   position: absolute;
//   z-index: 12;
// `

// export const Background = styled.div<{ height: string }>`
//   position: relative;
//   display: absolute;
//   width: 100%;
//   height: ${({ height }) => height};
//   overflow: hidden;
// `
// export const ResponsiveImg = styled(Img)<GatsbyImageWithIEPolyfillProps>`
//   position: absolute !important;
//   top: 50%;
//   left: 50%;
//   height: 100% !important;
//   width: 100% !important;
//   transform: translate(-50%, -50%);

//   img {
//     min-height: 100%;
//     min-width: 100%;
//   }
// `
