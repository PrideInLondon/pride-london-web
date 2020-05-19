import React from 'react'
import PropTypes from 'prop-types'
import { YmuwCTABox } from '../ymuwCtaBox'
import { Row } from '../grid'
import { MainContainer, IntroContainer } from './YmuwCtaContainer.styles'

const YmuwCtaContainer = ({ children, cta }) => {
  return (
    <>
      {cta && <YmuwCTABox link={cta.link} title={cta.title} body={cta.body} />}
      <MainContainer as="section">
        <Row mb={['30px', '60px']}>
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
      </MainContainer>
    </>
  )
}

YmuwCtaContainer.propTypes = {
  children: PropTypes.node.isRequired,
  cta: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    link: PropTypes.shape({
      to: PropTypes.string,
      text: PropTypes.string,
    }),
  }).isRequired,
}

export default YmuwCtaContainer
