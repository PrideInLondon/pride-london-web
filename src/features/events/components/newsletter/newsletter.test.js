import React from 'react'
import { shallow, mount } from 'enzyme'
import NewsletterForm from './'

describe('<NewsletterForm/>', () => {
  beforeAll(() => {
    global.___loader = {
      enqueue: jest.fn(),
    }
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({}))
  })
  afterAll(() => {
    global.___loader.enqueue.mockReset()
    global.fetch.mockClear()
    delete global.fetch
    wrapper.unmount()
  })

  it('matches snapshot', () => {
    const wrapper = shallow(<NewsletterForm />)
    expect(wrapper).toMatchSnapshot()
  })

  const wrapper = mount(<NewsletterForm />)
  const form = wrapper.find('form')
  const emailInput = wrapper.find('input[type="email"]')
  const submitButton = wrapper.find('newsletter__SubmitButton')

  it('should capture email enterred into the input field in the form action attibute', () => {
    emailInput.simulate('change', {
      target: { value: 'FOOBAR@email.com' },
    })
    expect(form.html()).toContain('value="FOOBAR@email.com"')
  })

  it('should fire a form submission when the Submit Button is clicked', () => {
    submitButton.simulate('submit')
    expect(global.fetch).toHaveBeenCalledTimes(1)
    expect(
      global.fetch
    ).toHaveBeenLastCalledWith(
      'https://prideinlondon.us6.list-manage.com/subscribe?u=8289d9ca2253b74574f849c73&id=a2423c3382&MERGE0=FOOBAR@email.com',
      { method: 'POST' }
    )
  })
})
