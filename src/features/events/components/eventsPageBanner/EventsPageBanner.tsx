import React from 'react'
import { BackgroundColorProps } from 'styled-system'
import { FixedObject } from 'gatsby-image'
import { Row, Column, Container } from '../../../../components/grid'
import { checkBreakpoint } from '../../../../utilities/'
import {
  StyledBanner,
  Title,
  Subtitle,
  ResponsiveImg,
} from './EventsPageBanner.styles'

interface BannerImage {
  desktop: FixedObject
  tablet: FixedObject
  mobile: FixedObject
}
interface EventsPageBannerProps extends BackgroundColorProps {
  title: string
  subtitle: string
  image: BannerImage
}

export const EventsPageBanner: React.FC<EventsPageBannerProps> = ({
  title,
  subtitle,
  backgroundColor,
  image,
}) => {
  return (
    <StyledBanner role="banner" backgroundColor={backgroundColor}>
      <Container>
        <Row alignItems="center">
          <Column width={[1, 0.33]}>
            <Title backgroundColor={backgroundColor}>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Column>
          <Column width={[1, 0.66]} py="0">
            <ResponsiveImg
              fixed={
                !checkBreakpoint(480)
                  ? image.mobile
                  : !checkBreakpoint(768)
                  ? image.tablet
                  : image.desktop
              }
            />
          </Column>
        </Row>
      </Container>
    </StyledBanner>
  )
}
