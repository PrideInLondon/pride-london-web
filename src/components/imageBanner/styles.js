import styled, { css } from 'styled-components'
import { Row, Container } from '../grid'
import { media } from '../../theme/media'

export const StyledContainer = styled(Container)`
  flex-grow: 1;
  align-items: center;
  display: flex;
  padding-bottom: 17vh;
  align-self: stretch;

  ${media.tablet`
    padding-bottom: 33vh;
  `};

  ${props =>
    props.imageSrc &&
    !props.imageFullWidth &&
    css`
      background-image: url(${props.imageSrc});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right bottom;
    `}
`

export const StyledRow = styled(Row)`
  width: 100%;

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
  height: ${props => props.large && '400px'};

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
    css`
      align-items: flex-start;
      min-height: 380px;
      padding-top: 50px;
      margin-bottom: -75px;
    `}


  ${media.mobile`
    height: ${props => props.large && '400px'};
  `};

  ${media.tablet`
    align-items: center;
    height: ${props => (props.large ? '500px' : '400px')};
    padding: 0;
  `};

  ${media.desktop`
    height: ${props => props.large && '650px'};
  `};

  ${media.desktopHD`
    height: ${props => props.large && '800px'};
  `};
`
