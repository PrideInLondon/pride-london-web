import styled from 'styled-components'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'
import iconChevronLeft from '../../../../theme/assets/images/icon-chevron-left.svg'
import iconChevronRight from '../../../../theme/assets/images/icon-chevron-right.svg'

export const FeaturedEventContent = styled.div`
  .slick-list {
    overflow: visible;
  }

  .slick-slide {
    width: 85vw;
    padding: 0 6px;
  }

  ${media.tablet`
    .slick-list {
      overflow: hidden;
    }
  `};

  .slick-prev {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background-color: ${theme.colors.white};
    position: absolute;
    top: 50%;
    left: -74px;
    background: url(${iconChevronLeft}) ${theme.colors.white} 50% 50% no-repeat;
    transform: translate(0, -50%);

    &:before {
      content: none;
    }

    &:hover,
    &:focus {
      background: url(${iconChevronLeft}) ${theme.colors.white} 50% 50%
        no-repeat;
    }
  }

  .slick-next {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background-color: ${theme.colors.white};
    position: absolute;
    top: 50%;
    right: -74px;
    background: url(${iconChevronRight}) ${theme.colors.white} 50% 50% no-repeat;
    transform: translate(0, -50%);

    &:before {
      content: none;
    }

    &:hover,
    &:focus {
      background: url(${iconChevronRight}) ${theme.colors.white} 50% 50%
        no-repeat;
    }
  }
`
