import styled from 'styled-components'
import { colors } from '../../theme/colors'
import { fonts } from '../../theme/fonts'
import { mediaQueries } from '../../theme/mediaQueries'
import CalendarIcon from '../../components/icons/calendarIcon'

export const CardDate = styled.span`
  display: flex;
  color: ${colors.darkCyan};
  font-size: 0.75rem;
  line-height: 1.29;
  margin-bottom: 0.65rem;
  font-family: ${fonts.title};
  font-weight: 600;
  ${mediaQueries.md} {
    font-size: 0.875rem;
  }
`

export const Details = styled.span`
  color: ${colors.indigo};
  text-decoration: none;
  font-size: 1rem;
  padding-bottom: 2px;
  background-image: linear-gradient(
    180deg,
    transparent calc(100% - 2px),
    ${colors.darkCyan} 2px
  );
  background-size: 100% 100%;
  ${mediaQueries.md} {
    font-size: 1.125rem;
  }
`

export const Price = styled.div`
  align-self: flex-end;
  color: ${colors.darkCyan};
  font-family: Poppins;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25;
  letter-spacing: -0.16px;

  ${mediaQueries.md} {
    font-size: 1rem;
  }
`

export const Location = styled.p`
  color: ${colors.darkIndigo};
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.29;
  ${mediaQueries.md} {
    font-size: 0.875rem;
  }
`

export const PaddedCalendarIcon = styled(CalendarIcon)`
  margin-right: 8.5px;
  height: 1rem;
`
