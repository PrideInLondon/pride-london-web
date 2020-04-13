# Pride in London website :rainbow:

[![Netlify Status](https://api.netlify.com/api/v1/badges/94c5776f-6b68-460b-9d6f-400504d691a4/deploy-status)](https://app.netlify.com/sites/prideinlondon-production/deploys)  
[![CircleCI](https://circleci.com/gh/PrideInLondon/pride-london-web.svg?style=svg)](https://circleci.com/gh/PrideInLondon/pride-london-web)  
[![CodeFactor](https://www.codefactor.io/repository/github/prideinlondon/pride-london-web/badge)](https://www.codefactor.io/repository/github/prideinlondon/pride-london-web)
[![DeepScan grade](https://deepscan.io/api/teams/3576/projects/5314/branches/40859/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3576&pid=5314&bid=40859)  
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/PrideInLondon/pride-london-web.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/PrideInLondon/pride-london-web/context:javascript) [![Total alerts](https://img.shields.io/lgtm/alerts/g/PrideInLondon/pride-london-web.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/PrideInLondon/pride-london-web/alerts/)  
[![codecov](https://codecov.io/gh/PrideInLondon/pride-london-web/branch/master/graph/badge.svg)](https://codecov.io/gh/PrideInLondon/pride-london-web)  
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=PrideInLondon_pride-london-web&metric=alert_status)](https://sonarcloud.io/dashboard?id=PrideInLondon_pride-london-web)

This project is a community effort to provide the [Pride in London website](https://prideinlondon.org). The project is written in JavaScript/TypeScript and leverages the [Gatsby](https://www.gatsbyjs.org) and [React](https://reactjs.org) web frameworks.

- [Developing locally](#developing-locally-headphones)
  - [Prerequisites](#prerequisites-new)
  - [Running the development server](#running-the-development-server-running)
  - [Running the unit tests](#running-the-unit-tests-white_check_mark)
  - [Building the static site](#building-the-static-site-hammer_and_wrench)
- [Resources](#resources-notebook)
- [Contributing](#contributing-handshaking)
- [Contributors](#contributors-sparkles)
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

## Contributing :handshaking:

Want to help out? That's amazing! Please see the [roles available](https://volunteer.prideinlondon.org/jobs?department_id=34173) on the Pride in London volunteer platform.

## Contributors :sparkles:

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/SonyaMoisset"><img src="https://avatars0.githubusercontent.com/u/13507232?v=4" width="100px;" alt=""/><br /><sub><b>Sonya Moisset</b></sub></a><br /><a href="#security-SonyaMoisset" title="Security">🛡️</a></td>
    <td align="center"><a href="https://github.com/laij84"><img src="https://avatars0.githubusercontent.com/u/18145822?v=4" width="100px;" alt=""/><br /><sub><b>Jason Lai</b></sub></a><br /><a href="https://github.com/PrideInLondon/pride-london-web/commits?author=laij84" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/egmcdonald"><img src="https://avatars2.githubusercontent.com/u/6469639?v=4" width="100px;" alt=""/><br /><sub><b>Em McDonald</b></sub></a><br /><a href="https://github.com/PrideInLondon/pride-london-web/commits?author=egmcdonald" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/dubhcait"><img src="https://avatars0.githubusercontent.com/u/39469813?v=4" width="100px;" alt=""/><br /><sub><b>Kate O'Brien</b></sub></a><br /><a href="https://github.com/PrideInLondon/pride-london-web/commits?author=dubhcait" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ja9-look"><img src="https://avatars1.githubusercontent.com/u/43492801?v=4" width="100px;" alt=""/><br /><sub><b>Janine Luk</b></sub></a><br /><a href="https://github.com/PrideInLondon/pride-london-web/commits?author=ja9-look" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/vlbee"><img src="https://avatars3.githubusercontent.com/u/32312712?v=4" width="100px;" alt=""/><br /><sub><b>Vanessa B.</b></sub></a><br /><a href="https://github.com/PrideInLondon/pride-london-web/commits?author=vlbee" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/haaminyangibo"><img src="https://avatars0.githubusercontent.com/u/40605956?v=4" width="100px;" alt=""/><br /><sub><b>Haami Nyangibo</b></sub></a><br /><a href="https://github.com/PrideInLondon/pride-london-web/commits?author=haaminyangibo" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/pedroeldiablo"><img src="https://avatars0.githubusercontent.com/u/20640939?v=4" width="100px;" alt=""/><br /><sub><b>Peter Williams</b></sub></a><br /><a href="https://github.com/PrideInLondon/pride-london-web/commits?author=pedroeldiablo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/SahelaR"><img src="https://avatars1.githubusercontent.com/u/46283569?v=4" width="100px;" alt=""/><br /><sub><b>Sahela R.</b></sub></a><br /><a href="https://github.com/PrideInLondon/pride-london-web/commits?author=SahelaR" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/schazbot"><img src="https://avatars3.githubusercontent.com/u/28059086?v=4" width="100px;" alt=""/><br /><sub><b>Charlotte Pearce</b></sub></a><br /><a href="https://github.com/PrideInLondon/pride-london-web/commits?author=schazbot" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/GingerGeek"><img src="https://avatars1.githubusercontent.com/u/4943487?v=4" width="100px;" alt=""/><br /><sub><b>Zed Spencer-Milnes</b></sub></a><br /><a href="#infra-GingerGeek" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/janteichmann"><img src="https://avatars0.githubusercontent.com/u/51962841?v=4" width="100px;" alt=""/><br /><sub><b>Jan Teichmann</b></sub></a><br /><a href="#data-janteichmann" title="Data">🔣</a></td>
    <td align="center"><a href="https://github.com/kristofhamilton"><img src="https://avatars0.githubusercontent.com/u/36228540?v=4" width="100px;" alt=""/><br /><sub><b>Kristof Hamilton</b></sub></a><br /><a href="#business-kristofhamilton" title="Business development">💼</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License :necktie:

This project is licensed under the terms of the [Apache License 2.0](./LICENSE).
