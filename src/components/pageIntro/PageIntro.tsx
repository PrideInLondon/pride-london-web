import React from 'react'
import { CTABox } from '../ctaBox'
import { Row, Container } from '../grid'
import { IntroContainer } from './PageIntro.styles'
import { PageIntroProps } from './PageIntro.types'

const PageIntro: React.FC<PageIntroProps> = ({ children, cta, ...props }) => {
  return (
    <>
      {cta && (
        <CTABox
          title={cta.title}
          body={cta.body}
          link={cta.link}
          position={{ lg: 'absolute' }}
          width={{ lg: '33.3333%' }}
          right={{ lg: '0' }}
          top={{ lg: '-100px' }}
        />
      )}
      <Container as="section" {...props}>
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
