import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { galleryGQLData } from '../../../../utilities/mocks/galleryMocks'
import { renderGallery, renderEmbeddedEntry } from './renderMethods'
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

  it('renders a gallery component if the id is gallery', () => {
    const wrapper = shallow(renderEmbeddedEntry(galleryGQLData))
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
