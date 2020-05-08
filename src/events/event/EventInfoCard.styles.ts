import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'

export const Wrapper = styled.div`
  background-color: ${theme.colors.indigo};
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  color: white;
  ${media.desktop`
  position: absolute;
  width: 400px;
  right: 0;
  top: -200px;
  padding: 40px;
`};
`

export const Row = styled.div`
  display: flex;
  margin-bottom: 14px;
  :last-child {
    margin-bottom: 0;
  }
`

export const IconWrapper = styled.div`
  flex: 0 0 26px;
  display: flex;
  justify-content: center;
  margin-right: 16px;
  padding-top: 2px;
`

export const Title = styled.h3`
  margin: 0;
  font-size: 1em;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  color: white;
`

export const Detail = styled.p`
  margin-top: 4px;
  font-size: 0.875rem;
`

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.eucalyptusGreen};
  width: 100%;
  margin: 16px 0px 32px 0px;
`

export const VSpace = styled.div`
  margin-top: 15px;
`

export const Link = styled.a`
  color: white;
  text-decoration: underline;
  :hover,
  :focus {
    text-decoration: none;
  }
`
