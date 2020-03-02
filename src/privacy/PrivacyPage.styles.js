import styled, { css } from 'styled-components'
import { hideVisually } from 'polished'
import theme from '../theme/theme'
import { media } from '../theme/media'

export const ResponsiveTable = styled.table`
  border-collapse: collapse;

  th {
    vertical-align: top;
    text-align: left;
    padding: 15px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.indigo};
    font-family: ${theme.fonts.title};
    font-weight: 600;
    border: 1px solid ${theme.colors.indigo};
  }

  td {
    vertical-align: top;
    border: 1px solid ${theme.colors.darkGrey};
    padding: 15px;
  }

  ${props =>
    props.responsive &&
    css`
      ${media.tabletMax`
        thead {
            ${hideVisually()}
        }

        tbody {
            display: block;
        }

        tr {
            display: block;
            margin-bottom: 2rem;

            &:last-child {
                margin-bottom: 1rem;
            }
        }

        td {
          padding: 10px;
          display: block;

          ${props.columns.map((column, index) => {
            return css`
                  &:nth-of-type(${index + 1}):before {
                  content: '${column}';
                  font-family: ${theme.fonts.title};
                  font-weight: 600;
                  padding: 10px;
                  display: block;
                  color: ${theme.colors.white};
                  background-color: ${theme.colors.indigo};
                  margin: -10px -10px 10px -10px;
                }
            `
          })}
          }
      `};
    `}
`
