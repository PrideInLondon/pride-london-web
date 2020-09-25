import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/theme/theme'
import { GlobalStyle } from '../src/layout/GlobalStyle'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  story => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {story()}
      </>
    </ThemeProvider>
  ),
]
