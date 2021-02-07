import styled from 'styled-components'
import { layout, LayoutProps, SpaceProps } from 'styled-system'
import { sm } from '../../theme/space'

export const Grid = styled.div<LayoutProps & SpaceProps>`
  display: flex;
  flex-wrap: wrap;
  > * {
    padding: ${sm}px;
    ${layout}
  }
`

// import { media } from '../../theme/media'
// export const Grid = styled.div`
//   display: grid;
//   grid-gap: 1.6rem;
//   ${media.mobile`
//     grid-template-columns: repeat(1, 1fr);
//   `}
//   ${media.tablet`
//     grid-template-columns: repeat(2, 1fr);
//   `}
//   ${media.desktop`
//     grid-template-columns: repeat(3, 1fr);
//   `}
// `
