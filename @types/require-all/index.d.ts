import React from 'react'

declare module 'require-all' {
  type requireAllDefault = () => { [key: string]: React.ReactNode }

  declare const requireAll: requireAllDefault
  // eslint-disable-next-line import/no-default-export
  export default requireAll
}
