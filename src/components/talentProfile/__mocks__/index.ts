import { Document } from '@contentful/rich-text-types'

// nodeType properties below ignored due to issue with Contentful types
// see https://github.com/contentful/rich-text/issues/123
export const json: Document = {
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ',
          nodeType: 'text',
        },
        {
          data: { uri: 'https://prideinlondon.org' },
          content: [
            {
              data: {},
              marks: [],
              value: 'commodo consequat',
              nodeType: 'text',
            },
          ],
          // @ts-ignore
          nodeType: 'hyperlink',
        },
        {
          data: {},
          marks: [],
          value: '.',
          // @ts-ignore
          nodeType: 'text',
        },
      ],
      // @ts-ignore
      nodeType: 'paragraph',
    },
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          nodeType: 'text',
        },
      ],
      // @ts-ignore
      nodeType: 'paragraph',
    },
  ],
  // @ts-ignore
  nodeType: 'document',
}
