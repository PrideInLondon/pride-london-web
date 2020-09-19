# Pride in London website :rainbow:

[![Netlify Status](https://api.netlify.com/api/v1/badges/94c5776f-6b68-460b-9d6f-400504d691a4/deploy-status)](https://app.netlify.com/sites/prideinlondon-production/deploys)  
[![CircleCI](https://circleci.com/gh/PrideInLondon/pride-london-web.svg?style=svg)](https://circleci.com/gh/PrideInLondon/pride-london-web)  
[![CodeFactor](https://www.codefactor.io/repository/github/prideinlondon/pride-london-web/badge)](https://www.codefactor.io/repository/github/prideinlondon/pride-london-web)
[![DeepScan grade](https://deepscan.io/api/teams/3576/projects/5314/branches/40859/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3576&pid=5314&bid=40859) ![CodeQL](https://github.com/PrideInLondon/pride-london-web/workflows/CodeQL/badge.svg?branch=master)  
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/PrideInLondon/pride-london-web.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/PrideInLondon/pride-london-web/context:javascript) [![Total alerts](https://img.shields.io/lgtm/alerts/g/PrideInLondon/pride-london-web.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/PrideInLondon/pride-london-web/alerts/)  
[![GuardRails badge](https://badges.guardrails.io/PrideInLondon/pride-london-web.svg?token=173b35feebf45089a66e3fcef88839ba84ff5cd833a95846aca4cf50b84ddf8a&provider=github)](https://dashboard.guardrails.io/gh/PrideInLondon/19039)  
[![codecov](https://codecov.io/gh/PrideInLondon/pride-london-web/branch/master/graph/badge.svg)](https://codecov.io/gh/PrideInLondon/pride-london-web)  
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=PrideInLondon_pride-london-web&metric=alert_status)](https://sonarcloud.io/dashboard?id=PrideInLondon_pride-london-web)

This project is a community effort to provide the [Pride in London website](https://prideinlondon.org). The project is written in JavaScript/TypeScript and leverages the [Gatsby](https://www.gatsbyjs.org) and [React](https://reactjs.org) web frameworks.

- [Developing locally](#developing-locally-headphones)
  - [Prerequisites](#prerequisites-new)
  - [Running the development server](#running-the-development-server-running)
  - [Running the unit tests](#running-the-unit-tests-white_check_mark)
  - [Building the static site](#building-the-static-site-hammer_and_wrench)
- [Resources](#resources-notebook)
- [Contributing](#contributing-handshake)
- [License](#license-necktie)

## Developing locally :headphones:

### Prerequisites :new:

Prior to getting started with development on this project, there are a few software installations required:

- [`node`](https://nodejs.org/en): preferably installed via ([`nvm`](https://github.com/nvm-sh/nvm))
  - take note of the recommended version defined in the [`.nvmrc`](./.nvmrc) file
- [`yarn`](https://yarnpkg.com): installed globally at the latest version
- [`gatsby-cli`](https://www.gatsbyjs.org/docs/gatsby-cli): installed globally at the latest version

Once the repo has been cloned, an environment file is required in the root of the project to supply connections to our upstream systems, e.g. [Contentful](https://www.contentful.com).

Copy the [`.env.example`](./.env.example) file (from the root of the project) to a new file (also at the root of the project) called `.env.development`:

```bash
# run this command in a terminal window from project root
cp .env.example .env.development
```

Replace the values on the right of the `=` signs with the following values:

- `CONTENTFUL` section: the API details from Contentful's Pride `web` space

#### Preview draft content :mag:

In order for Contentful draft content (i.e. unpublished content) to be available from a development setup, the `PREVIEW_CONTENT` boolean to be set to `true` in the [`.env.development`](./.env.development) file. This can simply be changed back to `false` in order to pull published content again.

If the app is not reading the content from the correct environment, try the following steps:

- ensure all running app instances are closed between config changes
- delete the local Contentful cache via the command `gatsby clean`

### Running the development server :running:

Ensure all the [prerequisites](#prerequisites-new) mentioned above are installed and set to the recommended versions.

In order to install the dependencies required for the project, open a terminal window at project root and run the following command:

```bash
yarn install
```

_Note that this command will require re-running for every update to the [`yarn.lock`](./yarn.lock) file._

In order to run the project, open a terminal window at project root and run the following command:

```bash
yarn develop
```

### Running the unit tests :white_check_mark:

There are a number of unit tests included in the project used to ensure business logic is behaving as expected across the codebase. In order to run these locally, open a terminal window at project root and run the following command:

```bash
yarn test
```

_Note that all dependencies must be installed prior to this command being run for the first time. See [section above](#running-the-development-server-running) for more information on how to do this._

### Building the static site :hammer_and_wrench:

As the site is built using Gatsby, only the static files are served in a production setting. These files can be built locally in order to e.g. debug issues with the deployed site.

In order to achieve this, a `.env.production` is required in the root of the project. This may be an exact clone of the `.env.development` file mentioned in the [section above](#prerequisites-new).

Prior to running the build command, ensure that all dependencies are installed via the command:

```bash
yarn install
```

Once this has been completed, the build command may be run. This can be done via the command:

```bash
yarn build
```

## Resources :notebook:

There are some resources available in this repo to aid development process:

- [How to guide](./how-to-guide.md): a guide for performing common development actions
- [Code of conduct](./.github/CODE_OF_CONDUCT.md): defines standards for how to engage in the Pride in London community

## Contributing :handshake:

Want to help out? That's amazing! Please see the [roles available](https://volunteer.prideinlondon.org/jobs?department_id=34173) on the Pride in London volunteer platform.

## License :necktie:

This project is licensed under the terms of the [Apache License 2.0](./LICENSE).
