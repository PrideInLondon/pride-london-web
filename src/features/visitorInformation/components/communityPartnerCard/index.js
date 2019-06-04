import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import Category from '../../../../components/newsCategory'
import { communityPartnerCategories } from '../../../../constants'
import theme from '../../../../theme/theme'
import { media } from '../../../../theme/media'
import { AccessibilityIcon, MapPinIcon } from '../../../../components/icons'

const Card = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  background-color: ${theme.colors.white};
`

const CardImg = styled(Img)`
  width: 100% !important;
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

  ${media.tablet`
    padding: 30px;
 `};
`
const CardCategory = styled(Category)`
  margin-bottom: 10px;
`

const CardDesc = styled(ReactMarkdown)`
  p,
  ul,
  ol,
  strong {
    font-size: 0.875rem;
    color: ${theme.colors.darkGrey};
    line-height: 1.3;
  }
`

const CardItem = styled.div`
  display: flex;
`
const IconWrapper = styled.div`
  margin-right: 15px;
`

const CommunityPartnerCard = ({ partner }) => {
  console.log(partner, communityPartnerCategories)
  return (
    <Card>
      <CardImg fixed={partner.featuredImage.fixed} />
      <CardBody>
        <CardCategories>
          {partner.category.map(category => {
            const cat = communityPartnerCategories.find(obj => {
              return obj.title === category
            })
            return <CardCategory category={cat} key={category} />
          })}
        </CardCategories>
        <CardTitle>{partner.venueName}</CardTitle>
        <CardDesc source={partner.description.description} />
        <CardItem>
          <IconWrapper>
            <AccessibilityIcon dark />
          </IconWrapper>

          <div>
            <h4>Accessibility</h4>
            <p>hello</p>
          </div>
        </CardItem>
        <CardItem>
          <IconWrapper>
            <MapPinIcon dark />
          </IconWrapper>
          <div>
            <h4>Location</h4>
            <p>hello</p>
          </div>
        </CardItem>
      </CardBody>
    </Card>
  )
}

CommunityPartnerCard.propTypes = {
  partner: PropTypes.object.isRequired,
}

export default CommunityPartnerCard
