import { v4 as uuid } from 'uuid'
import { Document } from '@contentful/rich-text-types'
import { getFirstParagraph } from './document-utils'

describe('getFirstParagraph', () => {
  it('should get first paragraph when first node is a paragraph', () => {
    const paragraph = uuid()
    const json: Document = {
      content: [
        {
          // @ts-ignore
          nodeType: 'paragraph',
          content: [
            {
              // @ts-ignore
              nodeType: 'text',
              value: paragraph,
              data: {},
              marks: [],
            },
          ],
        },
      ],
    }
    const actual = getFirstParagraph(json)
    expect(actual).toEqual(paragraph)
  })

  it('should get first paragraph when first node is not a paragraph', () => {
    const paragraph = uuid()
    const json: Document = {
      content: [
        {
          // @ts-ignore
          nodeType: uuid(),
          content: [],
        },
        {
          // @ts-ignore
          nodeType: 'paragraph',
          content: [
            {
              // @ts-ignore
              nodeType: 'text',
              value: paragraph,
              data: {},
              marks: [],
            },
          ],
        },
      ],
    }
    const actual = getFirstParagraph(json)
    expect(actual).toEqual(paragraph)
  })

  it('should return empty string if no content exists in document', () => {
    const json: Document = {
      // @ts-ignore
      nodeType: uuid(),
      content: [],
      data: {},
    }
    const actual = getFirstParagraph(json)
    expect(actual).toEqual('')
  })

  it('should return empty string if no paragraphs exist in document', () => {
    const json: Document = {
      content: [
        {
          // @ts-ignore
          nodeType: uuid(),
          content: [],
        },
      ],
    }
    const actual = getFirstParagraph(json)
    expect(actual).toEqual('')
  })

  it('should return empty string if first paragraph contains no content', () => {
    const json: Document = {
      content: [
        {
          // @ts-ignore
          nodeType: 'paragraph',
          content: [],
        },
      ],
    }
    const actual = getFirstParagraph(json)
    expect(actual).toEqual('')
  })

  it('should return empty string if first paragraph content has no value', () => {
    const json: Document = {
      content: [
        {
          // @ts-ignore
          nodeType: 'paragraph',
          content: [
            {
              // @ts-ignore
              nodeType: 'text',
              // @ts-ignore
              value: null,
              data: {},
              marks: [],
            },
          ],
        },
      ],
    }
    const actual = getFirstParagraph(json)
    expect(actual).toEqual('')
  })
})
