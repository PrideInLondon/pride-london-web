import React from 'react'
import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { P } from '../typography'
import { Navigate } from '../navigate'

const renderParagraph: NodeRenderer = (_node, children) => <P>{children}</P>

const BodyLink = styled(Navigate)`
  font-weight: 500;
  color: ${colors.indigo};
`

const renderHyperlink: NodeRenderer = ({ data: { uri } }, children) => (
  <BodyLink to={uri}>{children}</BodyLink>
)

export const renderMethods = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: renderParagraph,
    [INLINES.HYPERLINK]: renderHyperlink,
  },
}
