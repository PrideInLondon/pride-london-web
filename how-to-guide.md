# How to guide

This is a guide for performing common development actions within the Pride in London web solution.

- [Add a redirect](#add-a-redirect)
- [Add a new font](#add-a-new-font)

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
