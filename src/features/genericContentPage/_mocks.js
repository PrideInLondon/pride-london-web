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

export const buttonNullContentNode = {
  data: {
    target: {
      fields: {
        buttonContent: undefined,
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
        title: { 'en-GB': 'Hello World' },
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

export const typeformButtonNode = {
  data: {
    target: {
      fields: {
        buttonContent: { 'en-GB': 'Button typeform type' },
        buttonHref: { 'en-GB': 'https://prideinlondon.typeform.com/to/Z3WuCL' },
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

export const notRecognizedNode = {
  data: {
    target: {
      fields: {},
      sys: {
        contentType: {
          sys: {
            id: 'not-recognized',
          },
        },
      },
    },
  },
}
