import styled from 'styled-components'
import { default as NewsCardOryg } from '../../../blog/components/newsCard'
import theme from '../../../../theme/theme'
import { Container } from '../../../../components/grid'
import { media } from '../../../../theme/media'

export const Wrapper = styled(Container)`
  padding-bottom: 4rem;

  ${media.tabletMax`  
    padding-bottom: 1.5rem;
  `};
`
export const FullWidthFirstElement = styled.div`
  ${media.tabletMax`
    margin: 0 -20px;  
  `};
`

export const SecondaryNews = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  ${media.tabletMax`  
    margin: 78px 20px 0;
  `};
`
export const NewsCard = styled(NewsCardOryg)`
  background-color: ${theme.colors.lightGrey};
  border-radius: 4px;
  cursor: pointer;
  padding: 20px 20px 30px;
  font-family: Poppins;
  margin-bottom: 0;

  ${media.tablet`  
    padding: 30px;
    min-height: 235px;
  `};

  &:nth-of-type(1) {
    margin-bottom: 20px;

    ${media.tablet`  
      margin-bottom: 30px;
    `};
  }

  & > *:nth-child(1) {
    display: flex;
    align-items: baseline;

    ${media.tablet`
      align-items: flex-start;  
      flex-direction: column;
    `};

    & > * {
      font-size: 14px;
      line-height: 1.25;
    }

    & > *:nth-child(1) {
      padding: 4px 18px;
      margin-bottom: 5px;

      ${media.tablet`
          margin-bottom: 23px;
      `};
    }
  }
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
