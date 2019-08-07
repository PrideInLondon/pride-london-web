import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const GalleryImageDescription = styled.p`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: ${theme.colors.indigo};
`

export const PhotoAuthor = styled.a`
  float: right;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: ${theme.colors.darkGrey};
  text-decoration: none;
`
