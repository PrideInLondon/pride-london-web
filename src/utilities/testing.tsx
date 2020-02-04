import React, { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>{children}</>
  </ThemeProvider>
)

function customRender(ui: ReactElement, options?: any) {
  return render(ui, { wrapper: Providers, ...options })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { customRender as render }
