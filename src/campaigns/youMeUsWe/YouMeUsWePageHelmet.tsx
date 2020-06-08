import React from 'react'
import Helmet from 'react-helmet'
import { generateTitle } from '../../components/helmet/Helmet'
import ymuwMetaImg from './assets/ymuw-meta.jpg'
import { YouMeUsWePageProps } from './YouMeUseWePage.types'

const YouMeUsWePageHelmet = ({
  data: {
    site: {
      siteMetadata: { siteUrl },
    },
  },
  location: { pathname },
}: YouMeUsWePageProps) => {
  const title = generateTitle('You! Me! Us! We!')
  const metaImg = `${siteUrl}${ymuwMetaImg}?w=1000&h=562`
  const metaUrl = `${siteUrl}${pathname}`
  const description =
    'Celebrating allyship and standing up for one another #YouMeUsWe is a rallying cry for Pride 2020'
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },

        // Schema meta tags
        {
          itemProp: 'name',
          content: title,
        },
        {
          itemProp: 'description',
          content: description,
        },
        {
          itemProp: 'url',
          content: metaUrl,
        },
        {
          itemProp: 'thumbnailUrl',
          content: metaImg,
        },
        {
          itemProp: 'image',
          content: metaImg,
        },

        // OpenGraph Meta Tags
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: '',
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:image',
          content: metaImg,
        },
        {
          property: 'og:image:secure_url',
          content: metaImg,
        },

        // Twitter Meta Tags
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: metaImg,
        },
        {
          name: 'twitter:url',
          content: metaUrl,
        },
      ]}
    />
  )
}

export default YouMeUsWePageHelmet
