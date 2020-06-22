# How to guide

This is a guide for performing common development actions within the Pride in London web solution.

- [Add a redirect](#add-a-redirect)
- [Add a new font](#add-a-new-font)
- [Add a new icon](#add-a-new-icon)

## Add a redirect

A redirect may be required when a page is no longer available or has moved to a different location, yet links are still available on external sites. A redirect can also be useful to provide readable and friendly URLs to the user. The redirects for the site are managed [via Netlify](https://netlify.com). In order to add a redirect to the site, simply add a line to the [`_redirects`](./static/_redirects) file under the following format:

```sh
# this line is a comment
/url-the-user-types     /url-the-user-is-redirected-to      3xx
```

The last entry on the line is the [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Redirection_messages) that is served to the user upon attempting to access the initial url. In most cases for this site, this will be `301`.

More information on redirect syntax can be found in the [Netlify documentation](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file).

## Add a new font

This project uses two custom fonts by default (`Poppins` and `Roboto`). However, there may be a future requirement to add a new font. The font management is currently done using a manual approach in order to support older browsers and involves multiple steps.

1. head to the [Google Font Helper site](https://google-webfonts-helper.herokuapp.com)
2. search for the required font and download the assets
3. move the downloaded font files into their own folder under `src/fonts`
4. import the font into the global style object in file `src/layout/Layout.styles.js` by copying the `@font-face` code snippet from the page on the Google Font Help site
5. add the font name to the exported object in `src/theme/fonts.ts` including the fallback `sans-serif`, with an appropriate key (e.g. `element: "New Font Name, sans-serif"`)

When a font is added locally, the development sever will need restarted to pick up the new font. In order to use the new font, simply import the font from the `fonts.ts` file:

```js
import styled from 'styled-components'
import { fonts } from 'src/theme/fonts'

const Component = styled.div`
  font-family: ${fonts.element};
`
```

## Add a new icon

There is a generic `Icon` component available to act as a syntactic sugar component for any icon within the project. For more information on how to use the component, please see Storybook (`yarn storybook`).

In order to add a new icon and make it available for usage via the component, the following steps may be taken:

1. download the `.svg` file from [Zeplin](https://zeplin.io) and place in the [`src/components/icon/icons`](./src/components/icon/icons) directory
2. convert the `.svg` file into a `.tsx` file

```xml
<!-- starting .svg file -->
<svg>
  <path fill="#2D2F7F" fill-rule="evenodd" />
  <path fill="#FFFFFF" />
</svg>
```

```tsx
// converted .tsx file
import React from 'react'

const IconName = props => (
  // previous .svg content, note the camel-casing of fill-rule -> fillRule and passing of props
  <svg {...props}>
    <path fill="#2D2F7F" fillRule="evenodd" />
    <path fill="#FFFFFF" />
  </svg>
)

export default IconName
```

3. set the props to be of type [`InternalIconProps`](./src/components/icon/Icon.types.ts)

```tsx
import React from 'react'
import { InternalIconProps } from '../Icon.types'

const IconName = (props: InternalIconProps) => (
  <svg {...props}>
    <path fill="#2D2F7F" fillRule="evenodd" />
    <path fill="#FFFFFF" />
  </svg>
)

export default IconName
```

4. destructure the props to gain access to the `colors` property and assign the appropriate sub-properties to the `fill` path props

```tsx
import React from 'react'
import { InternalIconProps } from '../Icon.types'

const IconName = ({
  colors: { primary, secondary },
  ...props
}: InternalIconProps) => (
  <svg {...props}>
    <path fill={primary} fillRule="evenodd" />
    <path fill={secondary} />
  </svg>
)

export default IconName
```

5. open up the [`icons/index.ts`](./src/components/icon/icons/index.ts) module and add the following:
   1. import the component (place alphabetically in existing import list)
   2. create a `const` for the new icon name
   3. add the new icon name to the `NAMES` array (this is required to ensure strong typing)
   4. add a new property to the `COMPONENTS` map with key being the previously created `const` and the value being the imported icon

```ts
// icons/index.ts

// step 1
import IconName from './IconName'

// step 2
const ICON_NAME = 'icon-name' // note that this should be kebab-case

// step 3
export const NAMES = [
  ...
  ICON_NAME, // note that this should be added alphabetically
  ...
] as const

// step 4
export const COMPONENTS = {
  ...
  [ICON_NAME]: IconName, // note that this should be added alphabetically
  ...
}
```

6. now the component will be ready for use via the `Icon` component (this will automatically be added to Storybook and may be selected from the `Name` dropdown)

```tsx
import { Icon } from './src/components/icon'

const Component = () => <Icon name="icon-name" variant="indigo" />
```
