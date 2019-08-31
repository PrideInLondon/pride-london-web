import styled from 'styled-components'
import { default as NewsCardOryg } from '../../../blog/components/newsCard'
import theme from '../../../../theme/theme'
import { Container } from '../../../../components/grid'
import { media } from '../../../../theme/media'

export const Wrapper = styled(Container)`
  padding-bottom: 4rem;
  position: relative;
  z-index: 0;
  margin-bottom: 50px;

  ${media.tabletMax`  
    padding-bottom: 1.5rem;
  `};
`

export const SecondaryNews = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${media.desktopMax`
    margin: 40px 40px 0 40px;  
  `};

  ${media.tabletMax`  
    margin: 40px 10px 0 10px;
  `};
`
export const NewsCard = styled(NewsCardOryg)`
  background-color: ${theme.colors.lightGrey};
  border-radius: 4px;
  cursor: pointer;
  padding: 20px 20px 30px;

  ${media.tablet`  
    padding: 30px;
  `};

  ${media.desktop`
    &:nth-of-type(1) {
        margin-bottom: 30px;
    }
  `};

  ${media.desktopMax`  
    margin-top: 20px;
  `};
`

export const CTALinkOnlyMobile = styled.div`
  ${media.tabletMax`
    padding-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  `};

  display: none;
`
