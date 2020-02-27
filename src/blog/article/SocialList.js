import React from 'react'
import Facebook from '../../components/icons/facebook'
import Twitter from '../../components/icons/twitter'
import LinkedIn from '../../components/icons/linkedin'
import { SocialList, SocialItem, SocialLink } from './SocialList.styles'

const SocialMediaList = () => {
  let location
  if (typeof window !== 'undefined') {
    location = window.location.href
  }
  return (
    <SocialList>
      <SocialItem>
        <SocialLink
          href={`https://twitter.com/home?status=${location}`}
          aria-label="Share on Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href={`https://www.facebook.com/sharer/sharer.php?u=${location}`}
          aria-label="Share on Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${location}`}
          aria-label="Share on LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </SocialLink>
      </SocialItem>
    </SocialList>
  )
}

export default SocialMediaList
