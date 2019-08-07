import styled from 'styled-components'
import theme from '../../../../theme/theme'
import { FlexColumn } from '../../../grid'
import { media } from '../../../../theme/media'

export const PhotoDescription = styled.p`
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.43;
`

export const PhotoTitleColumn = styled(FlexColumn)`
  justify-content: center;

  ${media.tablet`
        justify-content: flex-start;
    `}
`

export const GallerySettings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  color: ${theme.colors.darkGrey};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  margin-bottom: 10px;
`

export const ViewAllButton = styled.a`
  cursor: pointer;
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
  transition: color 0.15s linear;

  &:hover,
  &:focus {
    color: ${theme.colors.eucalyptusGreen};
  }
`

export const PhotoNumber = styled.span``

export const PhotoAuthor = styled.span`
  font-size: 14px;
  color: ${theme.colors.darkGrey};
  text-transform: uppercase;
`
