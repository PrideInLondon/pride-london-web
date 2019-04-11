import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container, Row, Column } from '../components/grid'
import { media } from '../theme/media'
import theme from '../theme/theme'
import AccordionWrapper from '../components/accordion/accordionWrapper'
import Accordion from '../components/accordion'
import ContactForm from '../features/help/components/contactForm'
import BannerImage from '../components/banner/bannerImage'

const PageWrapper = styled.div`
  background-color: ${theme.colors.white};

  h1 {
    font-size: 20px;
    margin-top: 30px;

    ${media.tablet`
      margin-top: 60px;
      font-size: 32px;
      line-height: 38px;
      font-weight: bold;
    `};
  }
`

const Help = () => (
  <Fragment>
    <PageWrapper>
      <Container>
        <BannerImage />
        <Row>
          <Column width={[1, 1, 1, 0.6666]}>
            <h1> We're often asked... </h1>
            <AccordionWrapper>
              <Accordion />
            </AccordionWrapper>
          </Column>
          <Column width={[1, 1, 1, 0.3333]}>
            <ContactForm />
          </Column>
        </Row>
      </Container>
    </PageWrapper>
  </Fragment>
)

export default Help
