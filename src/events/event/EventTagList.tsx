import React from 'react'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import PropTypes from 'prop-types'
import hash from 'string-hash'
import Theme from '../../theme/theme'
import { ContentfulEvent } from './EventPride.types'

const hotPink = css`
  background-color: hsl(339, 87%, 55%);
  color: white;
`

const blueish = css`
  background-color: hsl(228, 57%, 58%);
  color: white;
`

const yellow = css`
  background-color: hsl(46, 100%, 68%);
  color: black;
`

// we want consistent colors for tags we might not have seen
const tagStyles = [hotPink, blueish, yellow]

const knownValueStyles: { [key in string]: FlattenSimpleInterpolation } = {
  Nightlife: yellow,
  Music: blueish,
  'Plays & Theatre': hotPink,
}

const selectTagStyle = (value: string) =>
  knownValueStyles[value] || tagStyles[hash(value) % tagStyles.length]

const EventTagListItem = styled.li<{ tagStyle: FlattenSimpleInterpolation }>`
  ${({ tagStyle }) => tagStyle};
  display: inline-block;
  border-radius: 4px;
  padding: 0px 6px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  font-family: ${Theme.fonts.title};
  margin: 0 10px 6px 0;
  margin-top: 0;
`

const EventTagUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

const EventTagList = ({
  values,
  className,
}: {
  values: ContentfulEvent['eventCategories']
  className?: string
}) => (
  <EventTagUl className={className}>
    {values.map(value => (
      <EventTagListItem tagStyle={selectTagStyle(value)} key={value}>
        {value}
      </EventTagListItem>
    ))}
  </EventTagUl>
)

EventTagList.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
}

EventTagList.defaultProps = {
  className: null,
}

export default EventTagList
