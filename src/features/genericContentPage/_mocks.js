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

export const sponsorSectionNode = {
  data: {
    target: {
      fields: {
        displayName: { 'en-GB': 'Test Sponsor Section' },
        sponsors: {
          'en-GB': [
            {
              fields: {
                sponsorName: {
                  'en-GB': 'Virtucon',
                },
                sponsorUrl: {
                  'en-GB': 'https://m.popkey.co/666ded/1VRvJ.gif',
                },
                sponsorLogo: {
                  'en-GB': {
                    fields: {
                      file: {
                        'en-GB': {
                          url:
                            '//images.ctfassets.net/n2o4hgsv6wcx/2AfZNrit52m4WUm4IKUOOE/21323f2171228d475743a62938778c53/ed2cf58359281c503c8fd2d56992b0a9.png?w=800&h=168&q=90',
                        },
                      },
                    },
                  },
                },
                sponsorLevel: {
                  'en-GB': 'Headline',
                },
              },
            },
          ],
        },
      },
      sys: {
        contentType: {
          sys: {
            id: 'sponsorSection',
          },
        },
      },
    },
  },
}
