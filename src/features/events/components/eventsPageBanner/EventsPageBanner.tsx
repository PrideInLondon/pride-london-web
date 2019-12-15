import React from 'react'
import { Row, Column } from '../../../../components/grid'
import { checkBreakpoint } from '../../../../utilities/'
import {
  StyledBanner,
  Title,
  Subtitle,
  ResponsiveImg,
  ImgWrapper,
} from './EventsPageBanner.styles'
import { EventsPageBannerProps } from './EventsPageBanner.types'

export const EventsPageBanner: React.FC<EventsPageBannerProps> = ({
  title,
  subtitle,
  backgroundColor,
  image,
}) => {
  console.log(image)
  return (
    <StyledBanner role="banner" backgroundColor={backgroundColor}>
      <Row
        alignItems="center"
        flexDirection={'row-reverse'}
        justifyContent={'space-between'}
        mr={0}
        flexWrap={{ default: 'wrap', md: 'nowrap' }}
      >
        <Column
          pr={0}
          py="0"
          maxWidth="920px"
          width={{ default: 1, md: 0.6666 }}
          mb={{ default: '-20px', md: 0 }}
        >
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
          ml={{ xl: '80px' }}
          zIndex={1}
          pb={{ default: '30px', sm: '40px', lg: '60px' }}
        >
          <div>
            <Title backgroundColor={backgroundColor}>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </div>
        </Column>
      </Row>
    </StyledBanner>
  )
}
