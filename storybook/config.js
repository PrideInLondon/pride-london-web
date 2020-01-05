import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../src/theme/theme'
import { GlobalStyle } from '../src/layouts/index.styles'

const StorybookGlobalStyle = createGlobalStyle`
  body {
   background-color: unset;
 }
 
 #story-root {
   padding: 0 40px;
 }
`

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

const req = require.context('../src', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

addDecorator(withA11y)
addDecorator(withInfo)
addParameters({
  info: {
    inline: true,
    maxPropObjectKeys: 10,
  },
})
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StorybookGlobalStyle />
      {story()}
    </>
  </ThemeProvider>
))

configure(loadStories, module)
