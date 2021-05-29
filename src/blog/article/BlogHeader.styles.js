import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../theme/theme'
import { getMostReadable } from '../../components/filterButton/FilterButton.styles'
import { Wrapper } from '../../components/wrapper/Wrapper'

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  & > div {
    margin-top: 30px;
  }
  & span {
    color: ${theme.colors.indigo};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    letter-spacing: normal;
    white-space: nowrap;
  }
`
export const NewsCategory = styled.div`
  display: inline-block;
  border: 2px solid;
  background-color: ${(props) => props.backgroundColor};
  border-color: ${(props) => props.backgroundColor};
  border-radius: 4px;
  color: ${(props) => getMostReadable(props.textColor)};
  cursor: pointer;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.14;
  padding: 2px 4px;
  white-space: nowrap;
  text-align: center;
  margin-right: 10px;
`
export const Title = styled.h1`
  font-family: Poppins;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: normal;
  color: #2c2c81;
`

export const BlogWrapper = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
)

BlogWrapper.defaultProps = {
  children: {},
  maxWidth: '830px',
  backgroundColor: 'white',
  position: 'relative',
  px: { default: 'lg', md: 'xl_mob', lg: 'xl' },
  mx: 'auto',
  marginBottom: 'lg',
}

BlogWrapper.propTypes = {
  children: PropTypes.any,
}
