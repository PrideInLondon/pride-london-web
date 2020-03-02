import styled from 'styled-components'
import { media } from '../theme/media'
import Title from './Title'

export const ViewsTitle = styled(Title)`
  margin: 0 10px 0.5em 10px;

  ${media.tablet`
    margin: 0 15px 0.5em 15px;
    position: absolute;
    left: 0;
    bottom: 100%;
    display: block;
    width: 100%;
  `};
`

export const CardContainer = styled.div`
  margin: -150px -10px 0 -10px;
  position: relative;

  @media (min-width: 470px) {
    margin-top: -200px;
  }

  ${media.tablet`
    margin: calc(-16.6667%) -15px 0 -15px;

    .slick-arrow {
      position: absolute;
      top: 0;
      z-index: 1;
      margin-top: calc(16.6667% - 15px);
    }

    .slick-next {
        right: -15px;
    }
    .slick-prev {
        left: -15px;
    }
  `};

  ${media.tabletMax`
    .slick-list {
        padding-left: 0 !important;
        overflow-x: hidden;
    }
  `};
`
