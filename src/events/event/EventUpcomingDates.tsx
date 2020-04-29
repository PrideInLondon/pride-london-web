import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { mediaQueries } from '../../theme/mediaQueries'
import { md } from '../../theme/breakpoints'
import { formatTime, formatUpcomingDates } from '../helpers'
import { useMedia } from '../../hooks/useMedia'

export const UpcomingDateItem = styled.div`
  text-align: center;
  border: 1px solid ${colors.lightGrey};
  padding: 16px;
  margin-right: 16px;
  min-width: 200px;
  scroll-snap-align: start;
  width: 185px;

  ${mediaQueries.md} {
    min-width: 0;
    margin-right: 32px;
    margin-bottom: 32px;
    width: calc(50% - 32px);
  }

  ${mediaQueries.lg} {
    width: calc(33.3333% - 32px);
  }
`
export const UpcomingDate = styled.h3`
  margin-top: 0;
`
export const UpcomingTimes = styled.p`
  color: ${colors.indigo};
  margin-bottom: 0;
`

export const UpcomingDatesContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  scroll-snap-type: x mandatory;
  /* Required for iOS */
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${mediaQueries.md} {
    flex-wrap: wrap;
  }
`

interface EventDate {
  startDate: string
  endDate: string
  id: string
}

interface EventUpcomingDatesProps {
  dates: EventDate[]
}
export const EventUpcomingDates: React.FC<EventUpcomingDatesProps> = ({
  dates,
}) => {
  const matches = useMedia(`(min-width: ${md}px)`)
  return (
    <UpcomingDatesContainer>
      {dates.map(event => (
        <UpcomingDateItem key={event.id} {...(!matches && { tabIndex: 0 })}>
          <UpcomingDate>{formatUpcomingDates(event)}</UpcomingDate>
          <UpcomingTimes>{`${formatTime(event.startDate)} - ${formatTime(
            event.endDate
          )} `}</UpcomingTimes>
        </UpcomingDateItem>
      ))}
    </UpcomingDatesContainer>
  )
}
