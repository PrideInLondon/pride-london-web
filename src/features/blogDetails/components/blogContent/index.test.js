import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { galleryGQLData } from '../../../../utilities/mocks/galleryMocks'
import {
  renderGallery,
  renderEmbeddedEntry,
  renderQuote,
  renderHr,
  renderImage,
  renderAssetHyperlink,
  rendeUrlHyperlink,
} from './renderMethods'
import {
  notRecognizedComponent,
  assetHyperlinkNode,
  urlHyperlinkNode,
  imageNode,
} from './__mocks__'
import BlogContent from '.'

describe(BlogContent.name, () => {
  it('renders with default values', () => {
    const article = { json: {} }
    const wrapper = shallow(<BlogContent article={article} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('render methods for Blog Content', () => {
  it('renders gallery', () => {
    const wrapper = shallow(<span>{renderGallery(galleryGQLData)}</span>)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders quote', () => {
    const wrapper = shallow(<span>{renderQuote(null, null)}</span>)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders hr', () => {
    const wrapper = shallow(<span>{renderHr()}</span>)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders image', () => {
    const wrapper = shallow(<span>{renderImage(imageNode)}</span>)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders AssetHyperlink', () => {
    const wrapper = shallow(
      <span>{renderAssetHyperlink(assetHyperlinkNode, null)}</span>
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders UrlHyperlink', () => {
    const wrapper = shallow(
      <span>{rendeUrlHyperlink(urlHyperlinkNode, null)}</span>
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders a gallery component if the id is gallery', () => {
    const wrapper = shallow(renderEmbeddedEntry(galleryGQLData))
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('returns null if id not recognized', () => {
    const wrapper = shallow(
      <span>{renderEmbeddedEntry(notRecognizedComponent)}</span>
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
