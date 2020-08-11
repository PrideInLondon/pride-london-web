import styled from 'styled-components'
import theme from '../../theme/theme'
import { getMostReadable } from '../../components/filterButton/FilterButton.styles'
import { mediaQueries } from '../../theme/mediaQueries'

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 30px;
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
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.backgroundColor};
  border-radius: 4px;
  color: ${props => getMostReadable(props.textColor)};
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
  padding: 0 30px;
  color: #2c2c81;
`
export const BlogHeaderContainer = styled.div`
  max-width: 830px;
  margin: auto auto 30px auto;
  min-height: 140px;
  background-color: ${theme.colors.white};
  position: relative;

  @media (min-width: 830px) {
    margin-top: -140px;
  }

  ${mediaQueries.sm} {
    padding: 30px 20px 0 20px;
  }

  ${mediaQueries.md} {
    padding: 30px -10px 0 -10px;
  }

  ${mediaQueries.lg} {
    padding: 30px 120px 0 120px;
  }

  ${mediaQueries.xl} {
    padding: 30px 20px 0 20px;
  }
`
