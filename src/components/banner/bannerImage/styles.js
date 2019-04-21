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
      props.large &&
      css`
        ${media.tablet`
          margin-bottom: -100px;
          ${StyledRow} {
            align-self: flex-start;
          }
        `};

        ${media.desktop`
          margin-bottom: -250px;
        `};

        ${media.desktopHD`
          margin-bottom: -300px;
        `};
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
