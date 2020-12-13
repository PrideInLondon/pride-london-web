import {
  Document,
  NodeData,
  Mark,
  Paragraph,
  MARKS,
} from '@contentful/rich-text-types'

// nodeType properties below ignored due to issue with Contentful types
// see https://github.com/contentful/rich-text/issues/123

const generateParagraph = ({
  data = {},
  marks = [],
  value,
}: {
  data?: NodeData
  marks?: Mark[]
  value: string
}): Paragraph => ({
  content: [
    {
      data,
      marks,
      value,
      nodeType: 'text',
    },
  ],
  // @ts-ignore
  nodeType: 'paragraph',
})

export const paragraph: Document = {
  content: [
    generateParagraph({
      value:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }),
    generateParagraph({
      value:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    }),
  ],
  // @ts-ignore
  nodeType: 'document',
}

export const formatted: Document = {
  content: [
    generateParagraph({ value: 'This is some regular text.' }),
    generateParagraph({
      value: 'This is some bold text.',
      marks: [{ type: MARKS.BOLD }],
    }),
    generateParagraph({
      value: 'This is some italic text.',
      marks: [{ type: MARKS.ITALIC }],
    }),
    generateParagraph({
      value: 'This is some underlined text.',
      marks: [{ type: MARKS.UNDERLINE }],
    }),
  ],
  // @ts-ignore
  nodeType: 'document',
}
