export const buttonNode = {
  data: {
    target: {
      fields: {
        buttonContent: { 'en-GB': 'Button primary type' },
        buttonHref: { 'en-GB': 'https://prideinlondon.org/who-we-are' },
        buttonPrimary: { 'en-GB': true },
      },
      sys: {
        contentType: {
          sys: {
            id: 'button',
          },
        },
      },
    },
  },
}

export const videoNode = {
  data: {
    target: {
      fields: {
        title: { 'en-GB': 'Video for example' },
        videoId: { 'en-GB': '7ge36or-nz4' },
      },
      sys: {
        contentType: {
          sys: {
            id: 'video',
          },
        },
      },
    },
  },
}

export const imageNode = {
  data: {
    target: {
      fields: {
        description: {
          'en-GB': 'Image description',
        },
        file: {
          'en-GB': {
            contentType: 'image/jpeg',
            details: {
              image: { width: 5152, height: 3864 },
              size: 8068085,
            },
            fileName: 'image.jpg',
            url: 'src',
          },
        },
      },
    },
  },
}
