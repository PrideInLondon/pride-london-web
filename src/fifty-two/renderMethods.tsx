import React from 'react'
import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import { P } from '../components/typography'

const renderParagraph: NodeRenderer = (_node, children) => <P>{children}</P>

export const renderMethods = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: renderParagraph,
  },
}
