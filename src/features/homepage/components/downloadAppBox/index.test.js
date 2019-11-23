import React from 'react'
import { shallow } from 'enzyme'
import DownloadAppBox from '.'

describe(DownloadAppBox.name, () => {
  it('download app section snapshot', () => {
    const wrapper = shallow(<DownloadAppBox />)
    expect(wrapper).toMatchSnapshot()
  })
})
