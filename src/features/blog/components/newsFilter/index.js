import React from 'react'
import styled from 'styled-components'
import theme from '../../../../theme/theme'
import config from './config';

const Filter = styled.div`
  color: ${props => props.textColor};
  background-color: ${props => props.backgroundColor};
`
const NewsFilter = ({ filterType }) => {
  const { label, textColor, backgroundColor } = config[filterType]
  return (
    <Filter textColor={textColor} backgroundColor={backgroundColor}>
      {label}
    </Filter>
  )
}

export default NewsFilter
