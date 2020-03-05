import React from 'react'
import { Row, Column } from '../components/grid'
import { checkBreakpoint } from '../utils/style-utils'
import {
  StyledBanner,
  Title,
  Subtitle,
  ResponsiveImg,
  ImgWrapper,
  SponsorLogoWrapper,
  SponsorLogoInner,
} from './EventsPageBanner.styles'
import { EventsPageBannerProps } from './EventsPageBanner.types'
import { ComingOut } from './ComingOut'

export const EventsPageBanner: React.FC<EventsPageBannerProps> = ({
  title,
  subtitle,
  backgroundColor,
  image,
  sponsor,
}) => (
  <StyledBanner role="banner" backgroundColor={backgroundColor}>
    <Row
      alignItems="center"
      flexDirection={'row-reverse'}
      justifyContent={'space-between'}
      mr="0"
      flexWrap={{ default: 'wrap', md: 'nowrap' }}
    >
      <Column pr="0" py="0" maxWidth="920px" width={{ default: 1, md: 0.6666 }}>
        <ImgWrapper>
          <ResponsiveImg
            fixed={
              !checkBreakpoint(480)
                ? image.mobile
                : !checkBreakpoint(768)
                ? image.tablet
                : image.desktop
            }
          />
          <SponsorLogoWrapper>
            <span>Sponsored by</span>
            <SponsorLogoInner>
              <ResponsiveImg fixed={sponsor.fixed} alt="Diageo" />
            </SponsorLogoInner>
          </SponsorLogoWrapper>
        </ImgWrapper>
      </Column>
      <Column
        width={{ default: 1, md: 0.3333 }}
        zIndex={1}
        ml={{ xl: '80px' }}
        mr={{ default: '30px', md: '0' }}
      >
        <div>
          <ComingOut />
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>
      </Column>
    </Row>
  </StyledBanner>
)
