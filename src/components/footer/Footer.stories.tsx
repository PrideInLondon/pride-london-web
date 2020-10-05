import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Footer, FooterProps } from './index'

export default {
  title: 'Footer',
  component: Footer,
} as Meta

const Template: Story<FooterProps> = args => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  socials: {
    facebook: 'https://facebook.com/pg/LondonLGBTPride',
    twitter: 'https://twitter.com/PrideInLondon',
    instagram: 'http://instagram.com/prideinlondon',
    'you-tube': 'https://youtube.com/user/LondonLGBTPride',
    'linked-in': 'https://linkedin.com/company/prideinlondon/',
    snapchat: 'http://snapchat.com/add/LondonLGBTPride',
  },
  data: {
    allContentfulSponsor: {
      edges: [
        {
          node: {
            sponsorName: 'Adobe',
            sponsorUrl: 'https://www.adobe.com/uk/',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/5fZSAWPVoib55xhoCETnlG/0293cf21151b0367930ff5af754cbe29/AdobeProud_800_logo.png?w=186&h=168&q=90',
              },
            },
            sponsorLevel: 'Bronze',
          },
        },
        {
          node: {
            sponsorName: 'Barclays',
            sponsorUrl: 'https://www.barclays.co.uk/',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/48WuBYo5dSACcM4wmwKQag/e99b7fdb7e75a3d362bddce61aca6dcc/barclays.png?w=988&h=168&q=90',
              },
            },
            sponsorLevel: 'Gold',
          },
        },
        {
          node: {
            sponsorName: 'Bt',
            sponsorUrl: 'https://www.bt.com/',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/7svNJikeVzIeFAcqx4ou7f/5037f3a7092387586f4e3edf8409aeee/BT_800.png?w=168&h=168&q=90',
              },
            },
            sponsorLevel: 'Gold',
          },
        },
        {
          node: {
            sponsorName: 'CMS',
            sponsorUrl: 'https://cms.law',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/2wwYeuNMj6KAKi8U8ww20m/53d8818a5874f714959294d8605611e0/cms.png?w=283&h=168&q=90',
              },
            },
            sponsorLevel: 'Gold',
          },
        },
        {
          node: {
            sponsorName: 'Coca Cola',
            sponsorUrl: 'https://www.coca-cola.co.uk',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/7FWIZd1g2qWo7l4EGTy8Rq/88a2156f55f44c23a136725f03882366/Coca-Cola-Red_800.png?w=517&h=168&q=90',
              },
            },
            sponsorLevel: 'Gold',
          },
        },
        {
          node: {
            sponsorName: 'Deliveroo',
            sponsorUrl: 'https://www.deliveroo.co.uk',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/1WEyi2NV2JNxopMmIDvSOm/a215a8e4c313c67617d875df450d29d5/deliveroo.png?w=190&h=168&q=90',
              },
            },
            sponsorLevel: 'Gold',
          },
        },
        {
          node: {
            sponsorName: 'Facebook',
            sponsorUrl: 'http://www.facebook.com',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/3nOJdNlm7Pp2TNgIqBm7Rj/30deaf61c6cb0fa5cacac0cbdf237ee7/Facebook-Community-Partner_logo_800.png?w=465&h=168&q=90',
              },
            },
            sponsorLevel: 'Gold',
          },
        },
        {
          node: {
            sponsorName: 'Mayor of London',
            sponsorUrl:
              'https://www.london.gov.uk/what-we-do/communities/communities-london-how-were-improving-equality/lesbian-gay-bisexual-and',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/6588BNO6Hu86weUEYwgeMm/18827fb5880696ebe0a7b94d83916ed3/mayor-of-london.png?w=894&h=168&q=90',
              },
            },
            sponsorLevel: 'Headline',
          },
        },
        {
          node: {
            sponsorName: 'NBC Universal',
            sponsorUrl: 'http://www.nbcuniversal.com',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/7rNMVOSR5tf0Y3kHWC3iuY/5dfe6cbe989e66874a77cdddaeb530b4/nbc-universal.png?w=765&h=168&q=90',
              },
            },
            sponsorLevel: 'Bronze',
          },
        },
        {
          node: {
            sponsorName: 'Playstation',
            sponsorUrl: 'http://www.playstation.com',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/76iAaCiTWeNKgkTUUYPcgQ/b93ac498590d230f9946ad957825be59/playstation.png?w=223&h=168&q=90',
              },
            },
            sponsorLevel: 'Bronze',
          },
        },
        {
          node: {
            sponsorName: 'Tesco',
            sponsorUrl: 'https://www.tesco.com/',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/5RqdR1RyQ8iQCiA8koseyA/9d704f64a71bacd8780fc930ac30efb8/tesco.png?w=335&h=168&q=90',
              },
            },
            sponsorLevel: 'Headline',
          },
        },
        {
          node: {
            sponsorName: 'Transport for London',
            sponsorUrl: 'https://tfl.gov.uk/',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/3e8mP7cd5CW8eyy6OkaMwk/ecc63994ebb97a3cd400e16faf1224de/tfl.png?w=433&h=168&q=90',
              },
            },
            sponsorLevel: 'Bronze',
          },
        },
        {
          node: {
            sponsorName: 'WeWork',
            sponsorUrl: 'https://www.wework.com/en-GB',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/2LALyNem0hMfhjFQAOICOp/20eb1d354c8a59be89b1e794ff783cfb/wework.png?w=751&h=168&q=90',
              },
            },
            sponsorLevel: 'Bronze',
          },
        },
        {
          node: {
            sponsorName: 'Westminster City Council',
            sponsorUrl: 'https://www.westminster.gov.uk/',
            sponsorLogo: {
              sizes: {
                src:
                  '//images.ctfassets.net/0ho16wyr4i9n/3XNRCGbKgU6s2aMpBcMKZl/7e6c038cfb0c2e49c294daa9751ae73d/Westminster_City_Council_800_logo.png?w=453&h=168&q=90',
              },
            },
            sponsorLevel: 'Bronze',
          },
        },
      ],
    },
  },
}
