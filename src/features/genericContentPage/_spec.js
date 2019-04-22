import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import { renderEmbeddedEntry, renderFigure } from './renderMethods'
import { buttonNode, videoNode, imageNode } from './_mocks'
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
})
