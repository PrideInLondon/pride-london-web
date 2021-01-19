import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import constants from '../constants'
import theme from '../theme/theme'
import { AccessibilityIcon, MapPinIcon, GenderIcon } from '../components/icons'
import Facebook from '../components/icons/facebook'
import Twitter from '../components/icons/twitter'
import Instagram from '../components/icons/instagram'
import Globe from '../components/icons/globe'
import {
  StyledCard,
  StyledImage,
  CardTitle,
  CardCategories,
  CardBody,
  CardCategory,
  CardItem,
  IconWrapper,
  CardItemTitle,
  Social,
  SocialLink,
} from './CommunityPartnerCard.styles'

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
    <StyledCard>
      <StyledImage fixed={featuredImage.fixed} />
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
            <MapPinIcon variant="blue" />
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
            <AccessibilityIcon variant="blue" />
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
              <GenderIcon variant="blue" />
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
    </StyledCard>
  )
}

CommunityPartnerCard.propTypes = {
  partner: PropTypes.object.isRequired,
}

export default CommunityPartnerCard
