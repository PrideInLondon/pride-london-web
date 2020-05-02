import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { mediaQueries } from '../../theme/mediaQueries'
import { md } from '../../theme/breakpoints'
import { formatTime, formatUpcomingDates } from '../helpers'
import { useMedia } from '../../hooks/useMedia'
import { Button } from '../../components/button/Button'

const UpcomingDateItem = styled.div`
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
const UpcomingDate = styled.h3`
  margin-top: 0;
  margin-bottom: 0.25em;
  font-size: 1rem;
  line-height: 1;
  ${mediaQueries.md} {
    font-size: 1.125rem;
  }
`
const UpcomingTimes = styled.p`
  color: ${colors.indigo};
  margin-bottom: 0;
  font-size: 0.875rem;
`

const UpcomingDatesContainer = styled.div`
  display: flex;
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
const UpcomingDatesPaginationWrapper = styled.div`
  text-align: center;
`
const UpcomingDatesStatus = styled.p`
  font-size: 0.875rem;
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
  const [count, setCount] = useState<number>(3)
  return (
    <>
      <UpcomingDatesContainer>
        {dates.slice(0, matches ? count : dates.length).map(event => (
          <UpcomingDateItem key={event.id} {...(!matches && { tabIndex: 0 })}>
            <UpcomingDate>{formatUpcomingDates(event)}</UpcomingDate>
            <UpcomingTimes>{`${formatTime(event.startDate)} - ${formatTime(
              event.endDate
            )} `}</UpcomingTimes>
          </UpcomingDateItem>
        ))}
      </UpcomingDatesContainer>
      {matches && dates.length > 3 && (
        <UpcomingDatesPaginationWrapper>
          <UpcomingDatesStatus role="status">{`You are viewing ${
            count >= dates.length ? dates.length : count
          } of ${dates.length} dates`}</UpcomingDatesStatus>
          <Button
            variant="outline"
            onClick={() => setCount(prevState => (prevState += 6))}
            disabled={count >= dates.length}
            mx="0 auto"
          >
            View more dates
          </Button>
        </UpcomingDatesPaginationWrapper>
      )}
    </>
  )
}
