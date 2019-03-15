# Pride London Web

[![Netlify Status](https://api.netlify.com/api/v1/badges/94c5776f-6b68-460b-9d6f-400504d691a4/deploy-status)](https://app.netlify.com/sites/fervent-albattani-72bcb1/deploys)   
[![CircleCI](https://circleci.com/gh/PrideInLondon/pride-london-web.svg?style=svg)](https://circleci.com/gh/PrideInLondon/pride-london-web)   
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f0c3e56f477040a288ecbe6b8d00b437)](https://www.codacy.com/app/PrideInLondon/pride-london-web?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=PrideInLondon/pride-london-web&amp;utm_campaign=Badge_Grade)   
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/PrideInLondon/pride-london-web.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/PrideInLondon/pride-london-web/context:javascript) [![Total alerts](https://img.shields.io/lgtm/alerts/g/PrideInLondon/pride-london-web.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/PrideInLondon/pride-london-web/alerts/)   
[![codecov](https://codecov.io/gh/PrideInLondon/pride-london-web/branch/master/graph/badge.svg)](https://codecov.io/gh/PrideInLondon/pride-london-web)   
[![Known Vulnerabilities](https://snyk.io/test/github/PrideInLondon/pride-london-web/badge.svg?targetFile=package.json)](https://snyk.io/test/github/PrideInLondon/pride-london-web)  

This project is a community effort to release a brand new web platform to supplant and improve upon the product currently available at prideinlondon.org.

## Contributing

Want to help out? That's amazing! The [Contribution Guide]() should hopefully get you on your way.

Check the [issues](https://github.com/kiraarghy/pride-london-web-gatsby/issues) section of the repo for tickets to pick up.

## Install

1.  Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

2.  Pull the repo.
3.  Install nvm from [here](https://github.com/creationix/nvm)
4.  Make sure you're using the correct version of node `nvm use`
5.  Ensure you have [yarn](https://yarnpkg.com/en/docs/install) installed. 

## ENVIRONMENT VARIABLES

1.  Create a `.env.development` file in the root of the project.
2.  In the file, add the contentful space ID for space Pride Web Test after the equal sign, for example `CONTENTFUL_ID=123456`
3.  Do the same for the access token by defining the`CONTENTFUL_TOKEN`

## Running 🏃

```sh
gatsby develop
```
Make sure you have the correct Contentful configuration or the project won't run.

## Tests

Test will be run using Jest + Enzyme. Can be run with:

```sh
yarn test
```

or to watch:

```sh
yarn test:watch
```

## Layout
Grid layout will be done via [Grid-Styled](http://jxnblk.com/grid-styled/). Breakpoints and spacing configuration can be found in `src/theme/theme.js`. See `src/grid/grid.js` to see how the Container, Column and Row components are made. Example of usage can be found on the events page on `src/pages/events.js`. Please see [Official Documentation](https://github.com/jxnblk/grid-styled) on how to set widths for your columns and set alignment.

## Styling

Styling will be done via [Styled-Components](https://www.styled-components.com/).

## Linting

This project uses **ESlint** with **Prettier**

To run the linter...

```sh
yarn lint
```

To apply Prettier formatting to all `.js` files...

```sh
yarn format
```
