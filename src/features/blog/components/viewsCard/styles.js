import styled from 'styled-components'
import { media } from '../../../../theme/media'
import Image from '../../../../components/image'
import theme from '../../../../theme/theme'

export const Container = styled.div`
  min-width: 162px;
  padding: 5px;

  ${media.tablet`
    min-width: 400px;
  `};

  &:hover { 
    cursor: pointer;
  }
`

export const ArticleTitle = styled.h2`
  color: ${theme.colors.indigo};
  font-size: 24px;
  margin: 0.5rem 0;
`

export const ArticleTitleTextContainer = styled.span`
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 200ms ease-out;

  ${Container}:hover & {
    border-bottom-color: ${theme.colors.eucalyptusGreen};
  }
`

export const ArticleAuthor = styled.p`
  color: ${props => props.theme.colors.darkGrey};
  font-family: ${theme.fonts.title};
  margin: 0.25rem 0;
  font-size: 14px;
`

export const ViewsThumbail = styled.img`
  border-radius: 4px;
  object-fit: cover;
  width: 162px;
  height: 220px;

  ${media.tablet`
    width: 400px;
    height: 540px;
    `}
`
