import React from 'react'
import styled from 'styled-components'
import Title from '../../components/title'
import ImageBanner from '../../../../components/imageBanner'
import theme from '../../../../theme/theme'
import NewsCard from '../../components/newsCard'
import { FlexColumn, StyledFlipMove } from '../../../../components/grid'
import {
  ALL_ARTICLES,
  NEWS,
  RESEARCH,
  ANNOUNCEMENTS,
  PARTNERS,
} from '../../components/newsFilter/config'

// import PropTypes from 'prop-types'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`

const mockBlogs = [
  {
    type: ALL_ARTICLES,
  },
  {
    type: NEWS,
  },
  {
    type: RESEARCH,
  },
  {
    type: ANNOUNCEMENTS,
  },
  {
    type: PARTNERS,
  },
  {
    type: RESEARCH,
  },
  {
    type: RESEARCH,
  },
  {
    type: ANNOUNCEMENTS,
  },
  {
    type: PARTNERS,
  },
  {
    type: RESEARCH,
  },
  {
    type: RESEARCH,
  },
  {
    type: ANNOUNCEMENTS,
  },
  {
    type: PARTNERS,
  },
  {
    type: RESEARCH,
  },
]

const NewsContainer = () => {
  return (
    <div>
      <Container>
        <Title>News</Title>
      </Container>
      <ImageBanner
        altText=""
        color={theme.colors.beachBlue}
        allowContentUnderflow
      />
      <Container>
        <StyledFlipMove>
          {mockBlogs.map(({ type }) => {
            return (
              <FlexColumn
                width={[
                  1, // 100% between 0px screen width and first breakpoint (375px)
                  1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                  1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
                  1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
                ]}
              >
                <NewsCard type={type} />
              </FlexColumn>
            )
          })}
        </StyledFlipMove>
      </Container>
    </div>
  )
}

export default NewsContainer
