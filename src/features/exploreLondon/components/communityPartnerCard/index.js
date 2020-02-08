import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import Category from '../../../../components/newsCategory'
import constants from '../../../../constants'
import theme from '../../../../theme/theme'
import { media } from '../../../../theme/media'
import {
  AccessibilityIcon,
  MapPinIcon,
  GenderIcon,
} from '../../../../components/icons'
import Facebook from '../../../../components/icons/facebook'
import Twitter from '../../../../components/icons/twitter'
import Instagram from '../../../../components/icons/instagram'
import Globe from '../../../../components/icons/globe'

const Card = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${theme.colors.white};
`

const CardImg = styled(Img)`
  padding-top: 58.75%;
  width: 100% !important;
  height: auto !important;
`

const CardTitle = styled.h3`
  margin: 0 0 0.5em 0;
`

const CardCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  p,
  ul,
  ol,
  strong {
    font-size: 0.875rem;
    color: ${theme.colors.darkGrey};
    line-height: 1.3;
  }

  ${media.mobile`
    min-height: unset;
  `};

  ${media.tablet`
    padding: 30px;
    min-height: 480px;
  `};
`
const CardCategory = styled(Category)`
  margin-bottom: 10px;
  margin-right: 5px;
`

const CardItem = styled.div`
  display: flex;
`
const IconWrapper = styled.div`
  margin-right: 15px;
`

const CardItemTitle = styled.h4`
  display: inline;
  font-family: ${theme.fonts.body};
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.44;
  color: ${theme.colors.indigo};

  &[href] {
    text-decoration: none;
    border-bottom: 1px solid ${theme.colors.eucalyptusGreen};
    transition: color 0.15s linear;

    &:hover,
    &:focus {
      color: ${theme.colors.eucalyptusGreen};
    }
  }

  &:after {
    content: '';
    display: block;
    margin-bottom: 0.3em;
  }
`

const Social = styled.div`
  display: flex;

  ${media.mobile`
    margin-top: 20px;
  `};

  ${media.tablet`
    margin-top: auto;
  `};
`

const SocialLink = styled.a`
  margin-right: 15px;

  svg {
    path {
      transition: fill 0.15s linear;
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${theme.colors.eucalyptusGreen};
      }
    }
  }
`

const CommunityPartnerCard = ({ partner }) => {
  const {
    featuredImage,
    category: categories,
    venueName,
    description: { description },
    addressLine1,
    addressLine2,
    city,
    postcode,
    genderNeutralToilets,
    location: { lat, lon },
    facebookUrl,
    instagramUrl,
    twitterUrl,
    websiteUrl,
    accessibilityDetails,
  } = partner
  return (
    <Card>
      <CardImg fixed={featuredImage.fixed} />
      <CardBody>
        <CardCategories>
          {categories.map(category => (
            <CardCategory
              category={constants.communityPartnerCategories.find(
                obj => obj.title === category
              )}
              key={category}
            />
          ))}
        </CardCategories>
        <CardTitle>{venueName}</CardTitle>
        <ReactMarkdown source={description} />
        <CardItem>
          <IconWrapper>
            <MapPinIcon dark />
          </IconWrapper>
          <div>
            <CardItemTitle
              as="a"
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`}
            >
              {venueName}
            </CardItemTitle>
            <p>{`${addressLine1}, ${
              addressLine2 ? `${addressLine2},` : ''
            } ${city}, ${postcode}`}</p>
          </div>
        </CardItem>
        <CardItem>
          <IconWrapper>
            <AccessibilityIcon dark />
          </IconWrapper>
          <div>
            <CardItemTitle>Accessibility</CardItemTitle>
            <p>
              {accessibilityDetails
                ? accessibilityDetails.map(
                    (detail, index) =>
                      `${
                        /^BSL/.test(detail) || index === 0
                          ? detail
                          : detail.toLowerCase()
                      }${index < accessibilityDetails.length - 1 ? ', ' : ''}`
                  )
                : 'Accessibility is limited. Please contact venue for further info.'}
            </p>
          </div>
        </CardItem>
        {genderNeutralToilets && (
          <CardItem>
            <IconWrapper>
              <GenderIcon dark />
            </IconWrapper>
            <div>
              <CardItemTitle>Gender Neutral Toilets</CardItemTitle>
            </div>
          </CardItem>
        )}
        <Social>
          {[
            { url: facebookUrl, name: 'Facebook', Component: Facebook },
            { url: instagramUrl, name: 'Instagram', Component: Instagram },
            { url: twitterUrl, name: 'Twitter', Component: Twitter },
            { url: websiteUrl, name: 'Website', Component: Globe },
          ].map(
            ({ url, name, Component }) =>
              url && (
                <SocialLink
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ${venueName} ${name}`}
                >
                  <Component
                    width={24}
                    height={24}
                    fill={theme.colors.indigo}
                  />
                </SocialLink>
              )
          )}
        </Social>
      </CardBody>
    </Card>
  )
}

CommunityPartnerCard.propTypes = {
  partner: PropTypes.object.isRequired,
}

export default CommunityPartnerCard
