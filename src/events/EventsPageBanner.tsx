import React from 'react'
import { Row, Column } from '../components/grid'
import { checkBreakpoint } from '../utils/style-utils'
import { CTALink } from '../components/ctaLink'
import { colors } from '../theme/colors'
import { P } from '../components/typography'

import {
  StyledBanner,
  Title,
  ResponsiveImg,
  ImgWrapper,
} from './EventsPageBanner.styles'
import { EventsPageBannerProps } from './EventsPageBanner.types'
import { ComingOut } from './ComingOut'

export const EventsPageBanner: React.FC<EventsPageBannerProps> = ({
  image,
}) => (
  <StyledBanner role="banner" backgroundColor={colors.mexicanPink}>
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
          <Title>
            <del>Coming Out</del>
          </Title>
          <P marginBottom="lg" color={colors.white}>
            The new way to find the best queer events for the queer community
            from Pride in London.
          </P>
          <CTALink to="/events/about-coming-out" color={colors.white}>
            Find out more
          </CTALink>
        </div>
      </Column>
    </Row>
  </StyledBanner>
)
