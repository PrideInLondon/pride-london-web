import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import { Button } from '../components/button/Button'

const CardWrapper = styled.div`
  padding-left: 20px;
  background-color: ${colors.indigo};
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
  color: ${colors.eucalyptusGreen};

  ${mediaQueries.md} {
    font-size: 2rem;
    max-width: 174px;
  }
`
const CardDescription = styled.p`
  color: ${colors.eucalyptusGreen};
  padding-right: 30px;
  font-size: 1.125rem;
  line-height: 26px;
`

const EventListingPromotionCard: React.FC = () => (
  <CardWrapper>
    <CardTitle>List your event</CardTitle>
    <CardDescription>
      Whether you're hosting an Instagram Live Q&amp;A, digital drag brunch or a
      theatre run, we'd love to showcase your event on our platform.
    </CardDescription>
    <Button
      to="/events/list-your-event"
      width={{ default: '100%', md: 'auto' }}
      variant="primary"
    >
      Find out more
    </Button>
  </CardWrapper>
)

export default EventListingPromotionCard
