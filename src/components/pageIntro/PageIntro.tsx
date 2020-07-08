import React from 'react'
import { CTABox } from '../ctaBox'
import { Row, Container } from '../grid'
import { IntroContainer } from './PageIntro.styles'
import { PageIntroProps } from './PageIntro.types'

const PageIntro: React.FC<PageIntroProps> = ({ children, cta }) => {
  return (
    <>
      {cta && <CTABox link={cta.link} title={cta.title} body={cta.body} />}
      <Container as="section">
        <Row>
          <IntroContainer
            width={[
              1, // 100% between 0px screen width and first breakpoint (375px)
              1, // 100% between first breakpoint(375px) and second breakpoint (768px)
              1, // 100% between second breakpoint(768px) and third breakpoint (1024px)
              7 / 12, // 7/12 between third breakpoint(1280px) and fourth breakpoint (1440px)
            ]}
          >
            {children}
          </IntroContainer>
        </Row>
      </Container>
    </>
  )
}

export default PageIntro
