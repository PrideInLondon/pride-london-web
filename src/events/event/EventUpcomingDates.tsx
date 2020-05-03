import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { mediaQueries } from '../../theme/mediaQueries'
import { md } from '../../theme/breakpoints'
import { formatTime, formatUpcomingDates } from '../helpers'
import { useMedia } from '../../hooks/useMedia'
import { Button } from '../../components/button/Button'

const UpcomingDateItem = styled.li`
  padding: 0 16px;
  scroll-snap-align: start;
  min-width: 200px;

  ${mediaQueries.md} {
    min-width: 0;
    width: 50%;
    padding: 16px;
  }

  ${mediaQueries.lg} {
    width: 33.3333%;
  }
`
const UpcomingDateContent = styled.div`
  text-align: center;
  border: 1px solid ${colors.lightGrey};
  padding: 16px;
`
const UpcomingDate = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5em;
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
  line-height: 1;
`

const UpcomingDatesContainer = styled.ul`
  padding: 0;
  margin: 0 -20px;
  list-style: none;
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
    margin: 0;
    margin: -16px -16px 0 -16px;
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
  const initialCount = 6
  const matches = useMedia(`(min-width: ${md}px)`)
  const [count, setCount] = useState<number>(initialCount)
  return (
    <>
      <UpcomingDatesContainer>
        {dates.slice(0, matches ? count : dates.length).map(event => (
          <UpcomingDateItem key={event.id}>
            <UpcomingDateContent {...(!matches && { tabIndex: 0 })}>
              <UpcomingDate>{formatUpcomingDates(event)}</UpcomingDate>
              <UpcomingTimes>{`${formatTime(event.startDate)} - ${formatTime(
                event.endDate
              )} `}</UpcomingTimes>
            </UpcomingDateContent>
          </UpcomingDateItem>
        ))}
      </UpcomingDatesContainer>
      {matches && dates.length > initialCount && (
        <UpcomingDatesPaginationWrapper>
          <UpcomingDatesStatus role="status">{`You are viewing ${
            count >= dates.length ? dates.length : count
          } of ${dates.length} dates`}</UpcomingDatesStatus>
          <Button
            variant="outline"
            onClick={() => setCount(prevState => (prevState += initialCount))}
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
