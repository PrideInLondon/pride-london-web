import styled from 'styled-components'
import Link from 'gatsby-link'
import theme from '../../../../theme/theme'
import { media } from '../../../../theme/media'

export const Card = styled(Link)`
  display: block;
  background-color: ${theme.colors.white};
  border-radius: 4px;
  padding: 30px 20px;
  width: 100%;
  font-family: ${theme.fonts.title};
  text-decoration: none;

  ${media.tablet`  
    min-height: 135px;
  `};
`

export const CardTitle = styled.h3`
  color: ${theme.colors.indigo};
  margin: 10px 0;
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 0.15s linear;
  display: inline;
  line-height: 1.3;

  ${Card}:hover &,
  ${Card}:focus & {
    border-bottom-color: ${theme.colors.eucalyptusGreen};
  }
`
