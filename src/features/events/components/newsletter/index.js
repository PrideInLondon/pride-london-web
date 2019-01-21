import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Column } from '../../../../components/grid'
import { media } from '../../../../theme/media'

const StyledInput = styled.input`
  font-size: 1.25em;
  height: 40px;
  margin-bottom: 10px;
  padding-left: 10px;
  width: 100%;

  /* Fix for firefox adding red border to required inputs */
  &:required {
    box-shadow: none;
  }

  ${media.desktop`
    margin-bottom: 0;
  `};
`

export const StyledButton = styled.input`
  background-color: ${props => props.theme.colors.eucalyptusGreen};
  border: none;
  border-radius: 4px;
  color: ${props => props.theme.colors.indigo};
  cursor: pointer;
  height: 40px;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 20px;
  outline: none;
  text-decoration: none;
  width: 100%;

  ${media.tablet`
    margin-bottom: 0;
    width: 138px;
  `};
`

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  width: 90%;
  ${media.desktop`
    padding: 60px auto;
  `};
`

export const StyledTitle = styled.h3`
  font-size: 1rem;
  margin: 0;
  padding: 3px 0;
  text-align: center;
  width: 100%;
  ${media.tablet`
    font-size: 0.8em;
    text-align: left;
  `};
`

export const StyledRow = styled(Row)`
  margin: 0;
`

export const StyledButtonColumn = styled(Column)`
  text-align: center;
`

export const StyledSubtitle = styled.p`
  font-size: 0.9rem;
  font-weight: 300;
  margin: 0 0 10px 0;
  text-align: center;
  width: 100%;
  ${media.tablet`
    font-size: 0.7em;
    margin: 0;
    text-align: left;
  `};
`

const url =
  '//prideinlondon.us6.list-manage.com/subscribe?u=8289d9ca2253b74574f849c73&id=a2423c3382&MERGE0='

class NewsletterForm extends React.Component {
  state = { value: '' }

  handleChange = ({ target: { value } }) => this.setState({ value })

  render() {
    return (
      <StyledContainer>
        <form
          action={`${url}${this.state.value}`}
          method="post"
          target="_blank"
        >
          <Row>
            <Column width={[1, 1, 1 / 3, 1 / 3]}>
              <StyledRow>
                <StyledTitle>{this.props.newsletterTitle}</StyledTitle>
              </StyledRow>
              <StyledRow>
                <StyledSubtitle>{this.props.newsletterSubtitle}</StyledSubtitle>
              </StyledRow>
            </Column>
            <Column width={[1, 1, 1 / 3, 1 / 3]}>
              <StyledInput
                type="email"
                onChange={this.handleChange}
                value={this.state.value}
                placeholder={this.props.placeholder}
                required
              />
            </Column>
            <StyledButtonColumn width={[1, 1, 1 / 3, 1 / 3]}>
              <StyledButton
                type="submit"
                value={this.props.buttonText}
                name="subscribe"
              />
            </StyledButtonColumn>
          </Row>
        </form>
      </StyledContainer>
    )
  }
}

NewsletterForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  newsletterTitle: PropTypes.string,
  newsletterSubtitle: PropTypes.string,
}

NewsletterForm.defaultProps = {
  placeholder: 'email address',
  newsletterTitle: 'Stay on top of Pride events',
  newsletterSubtitle: 'Sign up to receive occasional updates',
}

export default NewsletterForm
