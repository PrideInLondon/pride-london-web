import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../src/theme/theme'
import { GlobalStyle } from '../src/layout/GlobalStyle'

// #region Gatsby overrides
// Gatsby defines a global called ___loader to prevent its method calls from
// creating console errors you override it here
global.___loader = { enqueue: () => {}, hovering: () => {} }
// Gatsby internal mocking to prevent unnecessary errors in storybook testing
// environment
global.__PATH_PREFIX__ = ''
// This global variable is prevents the "__BASE_PATH__ is not defined" error
// inside Storybook. Required for gatsby-link.
//  https://github.com/gatsbyjs/gatsby/issues/10668#issuecomment-639014099
global.__BASE_PATH__ = ''
// This is to utilized to override the window.___navigate method Gatsby defines
// and uses to report what path a Link would be taking us to if it wasn't inside
// a storybook
window.___navigate = () => {}
// #endregion

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
