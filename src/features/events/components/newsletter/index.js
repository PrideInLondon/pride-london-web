import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Button from '../../../../components/button'
import Input from '../../../../components/input'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'

const Form = styled.form`
  ${media.tablet`
    display: flex;
    margin-bottom: 20px;
  `};

  ${media.desktop`
    margin-right: 40px;
    margin-bottom: 0;
  `};

  ${media.desktopHD`
    margin-right: 100px;
  `};
`

const Heading = styled.h2`
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 600;
  margin: 0 0 1.25rem 0;
  color: ${theme.colors.white};

  ${media.tablet`
    font-size: 1.5rem;
    line-height: 1.8125rem;
  `};
`

const StyledInput = styled(Input)`
  flex-grow: 1;

  ${media.tablet`
    margin-right: 30px;
    margin-bottom: 0;
  `};
`

const SubmitButton = styled(Button)`
  ${media.tablet`
    && {
      min-width: 0;
      width: 185px;
    }
  `};
  ${media.desktop`
    && {
      min-width: 0;
      width: 120px;
    }
  `};

  ${media.desktopHD`
    && {
      min-width: 0;
      width: 185px;
    }
  `};
`

const url =
  '//prideinlondon.us6.list-manage.com/subscribe?u=8289d9ca2253b74574f849c73&id=a2423c3382&MERGE0='

class NewsletterForm extends Component {
  state = { value: '' }

  handleChange = value => this.setState({ value })

  render() {
    return (
      <Fragment>
        <Heading>Don't miss our all year round events</Heading>
        <Form
          action={`${url}${this.state.value}`}
          method="post"
          target="_blank"
        >
          <StyledInput
            id="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.value}
            label="E-mail address"
            required
          />
          <SubmitButton type="submit" primary fullmobile>
            Join now
          </SubmitButton>
        </Form>
      </Fragment>
    )
  }
}

export default NewsletterForm
