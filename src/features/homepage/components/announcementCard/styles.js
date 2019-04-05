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

  ${media.tablet`
    position:absolute;
    bottom: 0;
    left: 0;
    padding: 0 20px 20px;
  `};
`

export const CardTitle = styled.span`
  background: #2d2f7f;
  font-size: 24px;
  line-height: 31px;
  font-weight: 600;
  padding: 5px 7px;
  color: #fff;
`
