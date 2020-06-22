import React from 'react'
import { Divider } from '../divider'
import { Wrapper, Content } from './Footer.styles'

const UpperSection = () => <>upper</>
const MiddleSection = () => <>middle</>
const LowerSection = () => <>lower</>

export const Footer = () => (
  <Wrapper>
    <Content>
      <UpperSection />
      <Divider />
      <MiddleSection />
      <Divider />
      <LowerSection />
    </Content>
  </Wrapper>
)
