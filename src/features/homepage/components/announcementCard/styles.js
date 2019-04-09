import styled from 'styled-components'
import { media } from '../../../../theme/media'

export const CardImage = styled.div`
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding-top: 100%;
  border-radius: 4px;
  border-bottom-right-radius: 0;
`

export const CardAnnouncement = styled.div`
  position: relative;
`

export const CardTitleWrapper = styled.div`
  position: block;
  padding: 0;
  padding-left: 0.37em;

  ${media.tablet`
    position:absolute;
    bottom: 0;
    left: 0;
    padding: 0 35px 40px;
  `};
`

export const CardTitle = styled.h2`
  background: #2d2f7f;
  font-size: 20px;
  line-height: 31px;
  margin: 0;
  padding-right: 0.45em;
  color: #fff;
  display: inline;
  position: relative;
  white-space: pre-wrap;
  border: 0 solid #2d2f7f;
  border-width: 0.35em 0; /* 0.25em is roughly equal to one space character. */

  &:after {
    content: '';
    position: absolute;
    top: -0.35em;
    right: 100%;
    bottom: -0.35em;
    width: 0.35em;
    background: #2d2f7f;
  }

  span {
    position: relative;
    z-index: 1;
  }

  ${media.tablet`
    font-size: 24px;
  `};
`
