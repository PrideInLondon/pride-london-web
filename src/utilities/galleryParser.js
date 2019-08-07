export const parseGQLToGallery = ({
  data: {
    target: {
      fields: { images },
    },
  },
}) => {
  return images['en-GB'].map(
    ({ fields: { altText, description, image, name, photographer } }) => {
      const imageUrl = image['en-GB'].fields.file['en-GB'].url
      const imageAltText = altText ? altText['en-GB'] : ''
      const imageAuthor = photographer
        ? {
            name: photographer['en-GB'].fields.name['en-GB'],
            url: photographer['en-GB'].fields.url['en-GB'],
          }
        : null
      return {
        name: name['en-GB'],
        description: description ? description['en-GB'] : null,
        photographer: imageAuthor,
        originalAlt: imageAltText,
        thumbnailAlt: imageAltText,
        original: `${imageUrl}?w=1920&h=1080&fit=fill`,
        thumbnail: `${imageUrl}?w=200&h=120&fit=fill`,
      }
    }
  )
}
