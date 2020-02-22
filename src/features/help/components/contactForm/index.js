import React from 'react'
import styled from 'styled-components'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'
import Button from '../../../../components/button'
import check from '../../../../theme/assets/images/icon-check.svg'
import DropDown from '../dropDown'

const Wrapper = styled.div`
  background-color: ${theme.colors.indigo};
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  color: white;
  margin: 0 -20px 0 -20px;

  .submit {
    background-position: 38% 47% !important;
    background-size: 20px !important;
  }

  ${media.desktop`
    margin: 0 !important;
  `};

  ${media.tablet`
    margin: 0 -50px 0 -50px;

    .submit {
      background-position: 34% 47% !important;
    }
  `};

  span {
    margin-bottom: 20px;
  }

  button {
    border: none;

    img {
      margin-right: 7px;
      width: 18px;
    }
  }

  small {
    font-size: 14px;
  }
`

const StyledSpan = styled.span`
  position: relative;
`

const StyledTextarea = styled.textarea`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  border-radius: 4px;
  line-height: 17px;
  height: 58px;
  padding: 20px;
  color: ${theme.colors.white};
  resize: none;
  ${media.desktop`
    margin-bottom: 0;
  `};

  &:focus {
    border: 2px solid ${theme.colors.eucalyptusGreen} !important;
    padding-top: 25px;

    + label {
      font-size: 12px;
      font-weight: lighter;
      top: -10px;
      left: 0;
      transition: top 0.5s;
      color: ${theme.colors.eucalyptusGreen};
    }
  }

  + label {
    color: ${theme.colors.white};
  }
`

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
`

const StyledInput = styled.input`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  border-radius: 4px;
  line-height: 17px;
  height: 58px;
  padding: 20px;
  color: ${theme.colors.white};
  ${media.desktop`
    margin-bottom: 0;
  `};

  &:focus {
    border: 2px solid ${theme.colors.eucalyptusGreen} !important;
    padding-top: 30px;
    padding-left: 18px;

    + label {
      font-size: 12px;
      font-weight: lighter;
      top: -10px;
      transition: top 0.5s;
      padding-bottom: 5px;
      color: ${theme.colors.eucalyptusGreen};
    }
  }

  + label {
    color: ${theme.colors.white};
  }
`

const AddressBox = styled.div`
  margin-top: 30px !important;

  h3 {
    margin-bottom: 10px;
  }
`

const StyledTitle = styled.h3`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title};
  margin-top: 0;

  ${media.mobile`
    margin-bottom: 30px;
    font-size: 18px;
  `};

  ${media.tablet`
    font-size: 24px;
  `};
`

class ContactForm extends React.Component {
  state = {
    isSent: false,
    buttonText: 'Send question',
  }

  showLabels = e => {
    const label = e.target.nextElementSibling
    label.style.display = 'inline'

    if (e.target.tagName == 'TEXTAREA') {
      this.increaseTextarea(e.target)
    }
  }

  hideLabels = e => {
    const label = e.target.nextElementSibling

    if (e.target.value != '') {
      label.style.display = 'none'
    } else {
      label.style.display = 'inline'
      label.style.transition = 'top 0.5s'
    }

    if (e.target.tagName == 'TEXTAREA' && e.target.value != '') {
      this.increaseTextarea(e.target)
    } else {
      this.decreaseTextarea(e.target)
    }
  }

  increaseTextarea = textarea => {
    textarea.style.height = '128px'
  }

  decreaseTextarea = textarea => {
    textarea.style.height = '58px'
  }

  changeButtonText = () => {
    this.setState({
      isSent: !this.state.isSent,
      buttonText: 'Sent!',
    })
  }

  render() {
    const { isSent } = this.state

    return (
      <Wrapper>
        <StyledTitle>Can't find what you need?</StyledTitle>
        <StyledSpan>
          <StyledInput
            id="name"
            onFocus={e => this.showLabels(e)}
            onBlur={e => this.hideLabels(e)}
          />
          <StyledLabel htmlFor="name">Full name</StyledLabel>
        </StyledSpan>
        <StyledSpan>
          <StyledInput
            id="email"
            onFocus={e => this.showLabels(e)}
            onBlur={e => this.hideLabels(e)}
          />
          <StyledLabel type="email" htmlFor="email">
            E-mail address
          </StyledLabel>
        </StyledSpan>
        <StyledSpan>
          <DropDown />
        </StyledSpan>
        <StyledSpan>
          <StyledTextarea
            id="question"
            onFocus={e => this.showLabels(e)}
            onBlur={e => this.hideLabels(e)}
          />
          <StyledLabel htmlFor="question">Question</StyledLabel>
        </StyledSpan>
        <Button className="submit" onClick={this.changeButtonText}>
          <img
            src={check}
            alt="checkmark"
            style={{ display: isSent ? 'inline' : 'none' }}
            aria-hidden="true"
          />
          {this.state.buttonText}
        </Button>
        <AddressBox>
          <StyledTitle>Or write to us..</StyledTitle>
          <small>
            London LGBT+ Community Pride CIC, PO Box 71920, London NW2 9QN
          </small>
        </AddressBox>
      </Wrapper>
    )
  }
}

export default ContactForm
