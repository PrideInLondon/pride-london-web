import styled from 'styled-components'
import chevronDown from '../../theme/assets/images/icon-chevron-down.svg'
import chevronUp from '../../theme/assets/images/icon-chevron-up.svg'
import { media } from '../../theme/media'
import theme from '../../theme/theme'

const AccordionWrapper = styled.div`
  .accordion__body {
    padding-top: 0 !important;
    background: ${theme.colors.lightGrey};
    animation: none !important;

    p {
      font-size: 14px;

      ${media.tablet`
        font-size: 18px;
        line-height: 27px;
      `};
    }
  }

  .accordion__title {
    padding: 20px !important;
    border-radius: 4px;
    outline: none;
    background: url(${chevronDown}) ${theme.colors.lightGrey} no-repeat 94%;

    h3 {
      line-height: 20px;
      font-size: 14px;
      margin-top: 0;
      color: ${theme.colors.black};

      &:hover {
        color: ${theme.colors.indigo};
      }

      ${media.tablet`
        font-size: 16px;
      `};
    }

    &:hover {
      background-color: ${theme.colors.lightGrey} !important;
    }
  }

  .accordion__title[aria-selected='true'] {
    border-top: 2px solid ${theme.colors.eucalyptusGreen} !important;
    border-left: 2px solid ${theme.colors.eucalyptusGreen} !important;
    border-right: 2px solid ${theme.colors.eucalyptusGreen} !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    background: url(${chevronUp}) ${theme.colors.white} no-repeat 94%;

    h3 {
      color: ${theme.colors.indigo};
    }

    &:hover {
      background-color: ${theme.colors.white} !important;
    }
  }

  .accordion__body[aria-hidden='false'] {
    border-bottom: 2px solid ${theme.colors.eucalyptusGreen} !important;
    border-left: 2px solid ${theme.colors.eucalyptusGreen} !important;
    border-right: 2px solid ${theme.colors.eucalyptusGreen} !important;
    border-bottom-left-radius: 4px !important;
    border-bottom-right-radius: 4px !important;
    background-color: ${theme.colors.white};
  }

  .accordion__item + .accordion__item {
    border-top: none;
    margin-top: 20px;
  }

  .accordion {
    border: none;
    border-radius: 4px !important;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

export default AccordionWrapper
