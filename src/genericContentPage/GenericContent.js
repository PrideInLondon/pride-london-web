import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import renderMethods from './renderMethods'

const GenericContent = ({ content }) =>
  documentToReactComponents(content, renderMethods)

export default GenericContent
