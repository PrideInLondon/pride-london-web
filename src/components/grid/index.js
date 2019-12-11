import React from 'react'
import { Flex, Box } from '@rebass/grid'
import styled, { keyframes, css } from 'styled-components'
import PropTypes from 'prop-types'

import theme from '../../theme/theme'
import { media } from '../../theme/media'

const Container = styled(Box)`
  ${media.mobile`
    min-width: 335px;
  `};

  ${media.tablet`
    min-width: 668px;
  `};

  ${media.desktop`
    min-width: 960px;
  `};

  ${media.desktopHD`
    min-width: 1260px;
    max-width: ${theme.breakpoints[3]}px;    
  `};
`

Container.defaultProps = {
  mx: 'auto',
}
// Margin right/left. 0-4 represent index on the spacing scale. Numbers 5+ represents px value
const rowMargin = [
  1, // Margin between 0px and 1st breakpoint (375px). 1 = 5px on spacing scale
  10, // Margin between 1st breakpoint(375px) and 2nd breakpoint (768px)
  40, // Margin between 2nd breakpoint(768px) and 3rd breakpoint (1024px)
  75, // Margin between 3nd breakpoint(1024px) and 4th breakpoint (1440px)
]

const Row = props => {
  const { mx, mr, ml, flexWrap } = props
  return (
    <Flex
      {...props}
      {...(mx === null
        ? {
            mr: mr === null ? rowMargin : mr,
            ml: ml === null ? rowMargin : ml,
          }
        : { mx })}
      {...(flexWrap ? { flexWrap } : { flexWrap: 'wrap' })}
    />
  )
}

Row.propTypes = {
  mx: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
    PropTypes.string,
  ]),
  mr: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
    PropTypes.string,
  ]),
  ml: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
    PropTypes.string,
  ]),
  flexWrap: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

Row.defaultProps = {
  mx: null,
  mr: null,
  ml: null,
  flexWrap: null,
}

// Padding right/left. 0-4 represent index on the spacing scale on the theme.js. Numbers 5+ represents px value
const columnXPadding = [
  1, // pad btwn 0px and 1st breakpoint (375px). 1 = 5px on spacing scale
  2, // pad btwn 1st breakpoint(375px) and 2nd breakpoint (768px). 2 = 10px on spacing scale
  2, // pad btwn 2nd breakpoint(768px) and 3rd breakpoint (1280px). 2 = 10px on spacing scale
  3, // pad from 3rd breakpoint(1024px) onwards
]
// Padding top/bottom. 0-4 represent index on the spacing scale. Numbers 5+ represents px value
const columnYPadding = 2

const Column = props => {
  const { px, py, pr, pl, pt, pb } = props
  return (
    <Box
      {...props}
      {...(px === null
        ? {
            pr: pr === null ? columnXPadding : pr,
            pl: pl === null ? columnXPadding : pl,
          }
        : { px })}
      {...(py === null
        ? {
            pt: pt === null ? columnYPadding : pt,
            pb: pb === null ? columnYPadding : pb,
          }
        : { py })}
    />
  )
}

Column.propTypes = {
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
}

Column.defaultProps = {
  px: null,
  py: null,
  pr: null,
  pl: null,
  pt: null,
  pb: null,
}

const keyFrame = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: '';
    opacity: '';
  }
`
// styled componets V4 requeries css helper func for keyframes
const keyFrameHelper = css`
  animation: ${keyFrame} 360ms ease;
`

// stylelint issue req this format otherwise it errors - CssSyntaxError
const FlexColumn = ({ animation, children, ...props }) => {
  const FlexInternal = styled(Column)`
    display: block;
    ${animation ? keyFrameHelper : ''}

    ${media.tablet`
    display: flex;
  `};
  `

  return <FlexInternal {...props}>{children}</FlexInternal>
}

FlexColumn.defaultProps = {
  animation: false,
  children: null,
}

FlexColumn.propTypes = {
  animation: PropTypes.bool,
  children: PropTypes.any,
}

const GreyWrapper = styled.div`
  background-color: ${theme.colors.lightGrey};
`

export { Container, Row, Column, FlexColumn, GreyWrapper }
