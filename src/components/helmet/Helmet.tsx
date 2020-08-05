import React from 'react'
import ReactHelmet from 'react-helmet'

export interface HelmetProps {
  siteUrl?: string
  pathname?: string
  title: string
  description?: string
  img?: string
}

export const generateTitle = (title: string) =>
  title.includes('|') ? title : `${title} | Pride in London`

export const Helmet: React.FC<HelmetProps> = ({
  siteUrl,
  pathname,
  title,
  description,
  img,
}) => {
  const pipedTitle = generateTitle(title)
  const prefixedDescription = `${title}. ${description}`
  const metaImg = siteUrl && img && `${siteUrl}${img}?w=1000&h=562`
  const metaUrl = siteUrl && pathname && `${siteUrl}${pathname}`
  return (
    <ReactHelmet
      title={pipedTitle}
      meta={[
        {
          name: 'description',
          content: prefixedDescription,
        },

        // Schema meta tags
        {
          itemProp: 'name',
          content: pipedTitle,
        },
        {
          itemProp: 'description',
          content: description,
        },

        // OpenGraph Meta Tags
        {
          property: 'og:title',
          content: pipedTitle,
        },
        {
          property: 'og:description',
          content: description,
        },

        // Twitter Meta Tags
        {
          name: 'twitter:title',
          content: pipedTitle,
        },
        {
          name: 'twitter:description',
          content: description,
        },

        // url tags
        ...(metaUrl
          ? [
              {
                itemProp: 'url',
                content: metaUrl,
              },
              {
                property: 'og:url',
                content: metaUrl,
              },
              {
                name: 'twitter:url',
                content: metaUrl,
              },
            ]
          : []),

        // image tags
        ...(metaImg
          ? [
              {
                itemProp: 'thumbnailUrl',
                content: metaImg,
              },
              {
                itemProp: 'image',
                content: metaImg,
              },
              {
                property: 'og:image',
                content: metaImg,
              },
              {
                property: 'og:image:secure_url',
                content: metaImg,
              },
              {
                name: 'twitter:image',
                content: metaImg,
              },
            ]
          : []),
      ]}
    />
  )
}

Helmet.defaultProps = {
  description:
    'The UK’s biggest, most diverse Pride. A home for every part of London’s LGBT+ community',
}
