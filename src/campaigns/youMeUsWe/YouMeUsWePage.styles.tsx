import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { ShareBar } from '../../components/shareBar'
import { Tag } from '../../components/tag'
import { lg, xl, xxl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'
import { fonts } from '../../theme/fonts'
import bannerBackground from './assets/banner/background.jpg'
import Mark from './assets/banner/Mark'
import { content } from './share'

export const BannerBackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bannerBackground});
  background-size: cover;
  width: 100%;
  height: 560px;

  ${mediaQueries.md} {
    height: 800px;
  }
`

export const BannerMark = styled(Mark)`
  width: 240px;
  height: 251px;

  ${mediaQueries.md} {
    width: 400px;
    height: 418px;
  }
`

export const DesktopShareBar = styled(ShareBar).attrs({
  content,
  variant: 'vertical',
  left: 'lg',
  position: 'absolute',
  top: '165px',
  zIndex: 1,
})`
  display: none;

  ${mediaQueries.md} {
    display: inline-block;
  }
`

export const MobileShareBar = styled(ShareBar).attrs({
  content,
  variant: 'horizontal',
})`
  display: block;

  ${mediaQueries.md} {
    display: none;
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h2,
  h3 {
    text-transform: uppercase;
    font-family: ${fonts.cactus};
  }

  h2 {
    text-align: center;
  }

  p {
    max-width: 620px;
    text-align: left;
  }
`

export const SectionWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: ${lg}px;
`

export const StyledTag = styled(Tag)`
  margin-top: ${xl}px;

  ${mediaQueries.md} {
    margin-top: ${xxl}px;
  }
`

export const FeaturedImage = styled.img<SpaceProps>`
  height: auto;
  width: 100%;

  ${space}
`
