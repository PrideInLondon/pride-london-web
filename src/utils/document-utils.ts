import { Document, Text } from '@contentful/rich-text-types'

export const getFirstParagraph = (json: Document): string => {
  const [firstParagraph] = json.content.filter(
    node => node.nodeType === 'paragraph'
  )
  const block = firstParagraph?.content[0] as Text
  return block?.value || ''
}
