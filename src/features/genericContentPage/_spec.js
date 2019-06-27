import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import { renderEmbeddedEntry, renderFigure } from './renderMethods'
import {
  buttonNode,
  videoNode,
  imageNode,
  typeformButtonNode,
  buttonNullContentNode,
  notRecognizedNode,
  sponsorSectionNode,
} from './_mocks'
import GenericContent from '.'

describe('<GenericContent/>', () => {
  it('renders with default values', () => {
    const content = {}
    const wrapper = shallow(<GenericContent content={content} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

describe('render methods for Generic Content', () => {
  it('renders a button component if the id is button', () => {
    const wrapper = shallow(renderEmbeddedEntry(buttonNode))
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders a video component if the id is video', () => {
    const wrapper = shallow(renderEmbeddedEntry(videoNode))
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders a Figure component for images', () => {
    const wrapper = shallow(renderFigure(imageNode))
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders a typeform button component if the id is button', () => {
    const wrapper = shallow(renderEmbeddedEntry(typeformButtonNode))
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders a button component if the content is null', () => {
    const wrapper = shallow(
      <span>{renderEmbeddedEntry(buttonNullContentNode)}</span>
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders a null if the id is not recognized', () => {
    const wrapper = shallow(
      <span>{renderEmbeddedEntry(notRecognizedNode)}</span>
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('click on typeform button', () => {
    const wrapper = mount(renderEmbeddedEntry(typeformButtonNode))
    expect(toJSON(wrapper)).toMatchSnapshot()
    const button = wrapper.find('button')
    button.simulate('click')
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders a sponsor section component if the id is sponsorSection', () => {
    const wrapper = shallow(renderEmbeddedEntry(sponsorSectionNode))
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
