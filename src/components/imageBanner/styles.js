import styled from 'styled-components'
import { Container } from '../grid'
import { media } from '../../theme/media'

export const StyledContainer = styled(Container)`
  flex-grow: 1;
`

export const StyledWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  min-height: 270px;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.color};
  padding-bottom: 35px;
  z-index: -2;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width: auto;
    z-index: -1;
  }

  ${media.tablet`
    align-items: center;
    height: ${props => (props.large === 'true' ? '500px' : '400px')};
    padding: 0;
  `};
`

export const StyledWrapperWithUnderflow = styled(StyledWrapper)`
  align-items: flex-start;
  min-height: 380px;
  padding-top: 50px;
  margin-bottom: -75px;
`
