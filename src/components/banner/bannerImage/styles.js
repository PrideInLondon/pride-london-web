import styled, { css } from 'styled-components'
import { media } from '../../../theme/media'
import { Row, Container } from '../../grid'

export const StyledContainer = styled(Container)`
  flex-grow: 1;
  align-items: center;
  display: flex;
  align-self: stretch;

  ${props =>
    props.imageSrc &&
    !props.imageFullWidth &&
    css`
      background-image: url(${props.imageSrc});
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: right bottom;
    `}
`

export const StyledRow = styled(Row)`
  width: 100%;

  ${media.tablet`
    padding-top: 50px;
    padding-bottom: 50px;
  `};

  ${media.tabletMax`
    align-self: flex-end;
  `};
`

export const StyledWrapper = styled.div`
  display: flex;
  min-height: 270px;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.color};
  min-height: ${props => (props.large || props.medium) && '400px'};

  ${props =>
    props.imageSrc &&
    props.imageFullWidth &&
    css`
      background-image: url(${props.imageSrc});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    `}

  ${props =>
    props.allowContentUnderflow &&
    (props.large || props.medium) &&
    css`
      ${media.tablet`
        ${StyledRow} {
        align-self: flex-start;
        }
    `};
    `}

  ${props =>
    props.allowContentUnderflow &&
    props.medium &&
    css`
      ${media.tabletMax`
      ${StyledRow} {
        align-self: flex-start;
        padding-top: 20px;
      }
    `};
    `}

  ${media.mobile`
    min-height: ${props => props.large && '400px'};
  `};

  ${media.tablet`
    align-items: center;
    min-height: ${props => (props.large || props.medium ? '500px' : '400px')};
    padding: 0;
  `};

  ${media.desktop`
    min-height: ${props =>
      props.large ? '650px' : props.medium ? '590px' : '400px'};
  `};

  ${media.desktopHD`
    min-height: ${props => props.large && '800px'};
  `};
`
