import React from 'react'
import Facebook from '../../../../components/icons/facebook'
import Twitter from '../../../../components/icons/twitter'
import LinkedIn from '../../../../components/icons/linkedin'
import { SocialList, SocialItem, SocialLink } from './styles'

const SocialMediaList = () => (
  <SocialList>
    <SocialItem>
      <SocialLink
        href="https://twitter.com/PrideInLondon"
        aria-label="Link to Twitter page"
      >
        <Twitter />
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink
        href="https://www.facebook.com/pg/LondonLGBTPride"
        aria-label="Link to Facebook page"
      >
        <Facebook />
      </SocialLink>
    </SocialItem>
    <SocialItem>
      <SocialLink
        href="https://www.linkedin.com/company/prideinlondon"
        aria-label="Link to LinkedIn page"
      >
        <LinkedIn />
      </SocialLink>
    </SocialItem>
  </SocialList>
)

export default SocialMediaList
