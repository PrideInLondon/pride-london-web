import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../../../theme/theme'
import NewsFilter from '../newsFilter'

const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 2px;
  margin-bottom: 15px;
  min-height: 135px;
  padding: 30px 20px;
  width: 100%;
  font-family: Poppins;
`

const CardHeader = styled.div`
  display: flex;
  align-items: baseline;
  height: 30px;
  margin-bottom: 10px;
`

const CardTitle = styled.h3`
  color: ${theme.colors.black};
  margin: 10px 0;
`

const NewsDate = styled.span`
  color: ${theme.colors.darkGrey};
  font-family: Roboto;
  font-size: 12px;
  margin-left: 5px;
  margin-right: 4px;
  white-space: nowrap;
`

const ReadLength = styled(NewsDate)`
  margin-left: 3px;
`

const CenterDot = () => <span>·</span>

const NewsCard = ({ type }) => (
  <Card>
    <CardHeader>
      <NewsFilter filterType={type} />
      <NewsDate>12 Jun 2019</NewsDate>
      <CenterDot />
      <ReadLength>10 min read</ReadLength>
    </CardHeader>
    <CardTitle>
      Pride in London sees record number of parade applications
    </CardTitle>
  </Card>
)

NewsCard.propTypes = {
  type: PropTypes.string.isRequired,
}

export default NewsCard
