import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import FlipMove from 'react-flip-move'

import theme from '../../theme/theme'
import { media } from '../../theme/media'

const Container = styled(Box)`
  @media (min-width: ${theme.breakpoints[0]}) {
    min-width: 335px;
  }

  @media (min-width: ${theme.breakpoints[1]}) {
    min-width: 668px;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    min-width: 960px;
  }

  @media (min-width: ${theme.breakpoints[3]}) {
    min-width: 1260px;
    max-width: ${theme.breakpoints[3]};
  }
`
Container.defaultProps = {
  mx: 'auto',
}

const Row = props => (
  <Flex
    {...props}
    // Margin right/left. 0-4 represent index on the spacing scale. Numbers 5+ represents px value
    mx={[
      1, // Margin between 0px and 1st breakpoint (375px). 1 = 5px on spacing scale
      10, // Margin between 1st breakpoint(375px) and 2nd breakpoint (768px)
      40, // Margin between 2nd breakpoint(768px) and 3rd breakpoint (1024px)
      75, // Margin between 2nd breakpoint(1024px) and 3rd breakpoint (1440px)
    ]}
    flexWrap="wrap"
  />
)

const Column = props => (
  <Box
    {...props}
    // Padding right/left. 0-4 represent index on the spacing scale. Numbers 5+ represents px value
    px={[
      1, // pad btwn 0px and 1st breakpoint (375px). 1 = 5px on spacing scale
      2, // pad btwn 1st breakpoint(375px) and 2nd breakpoint (768px). 2 = 10px on spacing scale
      2, // pad btwn 2nd breakpoint(768px) and 3rd breakpoint (1280px). 2 = 10px on spacing scale
      3, // pad from 3rd breakpoint(1024px) onwards
    ]}
    // Padding top/bottom. 0-4 represent index on the spacing scale. Numbers 5+ represents px value
    py={2} // Global padding. 2 = 10px on spacing scale
  />
)

const FlexColumn = styled(Column)`
  display: block;

  ${media.tablet`
    display: flex;
  `};
`

const StyledFlipMove = styled(FlipMove)`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
`

export { Container, Row, Column, FlexColumn, StyledFlipMove }
