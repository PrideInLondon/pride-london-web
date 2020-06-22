import React from 'react'
import { storiesOf } from '@storybook/react'
import { Footer } from './Footer'

const SOCIALS = {
  facebook: 'https://facebook.com/pg/LondonLGBTPride',
  twitter: 'https://twitter.com/PrideInLondon',
  instagram: 'http://instagram.com/prideinlondon',
  youtube: 'https://youtube.com/user/LondonLGBTPride',
  linkedin: 'https://linkedin.com/company/prideinlondon/',
  snapchat: 'http://snapchat.com/add/LondonLGBTPride',
}

storiesOf(Footer.name, module).add('basic', () => <Footer {...SOCIALS} />)
