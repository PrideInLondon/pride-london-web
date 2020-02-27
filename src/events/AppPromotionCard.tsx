import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import appleStore from '../theme/assets/images/apple.svg'
import googlePlayStore from '../theme/assets/images/google-play.svg'

const CardWrapper = styled.div`
  padding-left: 20px;
  margin-bottom: 40px;
  ${mediaQueries.md} {
    padding-left: 30px;
    margin-bottom: 0;
  }
`

const CardTitle = styled.h3`
  margin: 40px 0 0.5em 0;
  font-family: Poppins;
  font-size: 2rem;
  line-height: 1.19;
  font-weight: bold;
  color: ${colors.white};

  ${mediaQueries.md} {
    font-size: 2rem;
    max-width: 174px;
  }
`

const CardDescription = styled.p`
  color: ${colors.white};
  padding-right: 30px;
  font-size: 1.125rem;
  line-height: 26px;
`
const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  ${mediaQueries.md} {
    flex-direction: column;
  }
`

const AppStoreLink = styled.a`
  text-decoration: none;
  margin: 5px 0;
  ${mediaQueries.md} {
    margin-right: 0;
  }
`
const AppStoreImg = styled.img`
  background: black;
  width: 140px;
  height: 48px;
  object-fit: contain;
`
export const title = 'Download our app'
export const description = `Download our iOS & Android app to carry our interactive Parade map,
stage line up info and afterparty information around with you on the day`

const AppPromotionCard: React.FC = () => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <LinkWrapper>
        <AppStoreLink
          href="https://apps.apple.com/gb/app/pride-in-london/id1250496471"
          rel="noopener noreferrer"
          aria-label="link to the Apple store so you can download the IOS version of the Pride in London app"
          target="_blank"
        >
          <AppStoreImg
            src={appleStore}
            alt="Apple store icon"
            aria-hidden="true"
          />
        </AppStoreLink>
        <AppStoreLink
          href="https://play.google.com/store/apps/details?id=org.prideinlondon.festival&hl=en_GB"
          aria-label="link to the Google store so you can download the Android version Pride in London app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AppStoreImg
            src={googlePlayStore}
            alt="Apple store icon"
            aria-hidden="true"
          />
        </AppStoreLink>
      </LinkWrapper>
    </CardWrapper>
  )
}

export default AppPromotionCard
