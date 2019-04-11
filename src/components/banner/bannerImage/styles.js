import styled, { css } from 'styled-components'
import { media } from '../../../theme/media'
import { Row, Container } from '../../grid'

export const StyledContainer = styled(Container)`
  flex-grow: 1;
  align-items: center;
  display: flex;
  align-self: stretch;
  padding-bottom: ${props => (props.homepage ? '17vh' : '0')};

  ${media.tablet`
    padding-bottom: ${props => (props.homepage ? '35vh' : '0')};
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
