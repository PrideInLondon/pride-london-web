import { Document, MARKS } from '@contentful/rich-text-types'

// nodeType properties below ignored due to issue with Contentful types
// see https://github.com/contentful/rich-text/issues/123

export const paragraph: Document = {
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          // @ts-ignore
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

export const formatted: Document = {
  content: [
    {
      data: {},
      content: [
        {
          data: {},
          marks: [],
          value: 'This is some regular text. ',
          nodeType: 'text',
        },

        {
          data: {},
          marks: [{ type: MARKS.BOLD }],
          value: 'This is some bold text.',
          nodeType: 'text',
        },
        {
          data: {},
          marks: [],
          value: ' ',
          nodeType: 'text',
        },
        {
          data: {},
          marks: [{ type: MARKS.ITALIC }],
          value: 'This is some italic text.',
          nodeType: 'text',
        },
        {
          data: {},
          marks: [],
          value: ' ',
          nodeType: 'text',
        },
        {
          data: {},
          marks: [{ type: MARKS.UNDERLINE }],
          value: 'This is some underlined text.',
          nodeType: 'text',
        },
        {
          data: {},
          marks: [],
          value: ' ',
          nodeType: 'text',
        },
        {
          data: { uri: 'https://prideinlondon.org' },
          content: [
            {
              data: {},
              marks: [],
              value: 'This is a hyperlink. ',
              nodeType: 'text',
            },
          ],
          // @ts-ignore
          nodeType: 'hyperlink',
        },
      ],
      // @ts-ignore
      nodeType: 'paragraph',
    },
  ],
  // @ts-ignore
  nodeType: 'document',
}
