import styled from 'styled-components'
import Link from 'gatsby-link'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'

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
  display: block;
  border: none;
`

export const CardTitleWrapper = styled.div`
  position: block;
  padding: 0;
  padding-left: 10px;

  ${media.tablet`
    position:absolute;
    bottom: 0;
    left: 0;
    padding: 0 35px 40px;
  `};
`

export const CardTitle = styled.h2`
  background-color: ${theme.colors.indigo};
  font-size: 20px;
  line-height: 31px;
  margin: 0;
  color: #fff;
  display: inline;
  position: relative;
  white-space: pre-wrap;
  border: 0 solid ${theme.colors.indigo};
  border-width: 0.35em 0;
  box-shadow: 10px 0 0 ${theme.colors.indigo}, -10px 0 0 ${theme.colors.indigo};
  box-decoration-break: clone;

  ${media.tablet`
    font-size: 1.5rem;
  `};
`

export const CardLink = styled(Link)`
  position: relative;
  border: none;
  color: ${theme.colors.white};
  z-index: 1;
  text-decoration: none;
`
