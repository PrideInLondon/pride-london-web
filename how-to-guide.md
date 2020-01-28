# How to guide

This is a guide for performing common development actions within the Pride in London web solution.

## Add a redirect

A redirect may be required when a page is no longer available or has moved to a different location, yet links are still available on external sites. A redirect can also be useful to provide readable and friendly URLs to the user. The redirects for the site are managed [via Netlify](https://netlify.com). In order to add a redirect to the site, simply add a line to the [`_redirects`](./static/_redirects) file under the following format:

```sh
# this line is a comment
/url-the-user-types     /url-the-user-is-redirected-to      3xx
```

The last entry on the line is the [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Redirection_messages) that is served to the user upon attempting to access the initial url. In most cases for this site, this will be `301`.

More information on redirect syntax can be found in the [Netlify documentation](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file).
