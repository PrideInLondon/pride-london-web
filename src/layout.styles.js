import styled, { createGlobalStyle } from 'styled-components'
import { colors } from './theme/colors'

/**
 * Roboto 300
 */
import Roboto300EOT from './theme/assets/fonts/roboto/roboto-v20-latin-300.eot'
import Roboto300WOFF from './theme/assets/fonts/roboto/roboto-v20-latin-300.woff'
import Roboto300WOFF2 from './theme/assets/fonts/roboto/roboto-v20-latin-300.woff2'
import Roboto300TTF from './theme/assets/fonts/roboto/roboto-v20-latin-300.ttf'
import Roboto300SVG from './theme/assets/fonts/roboto/roboto-v20-latin-300.svg'
/**
 * Roboto Regular
 */
import RobotoRegularEOT from './theme/assets/fonts/roboto/roboto-v18-latin-regular.eot'
import RobotoRegularWOFF from './theme/assets/fonts/roboto/roboto-v18-latin-regular.woff'
import RobotoRegularWOFF2 from './theme/assets/fonts/roboto/roboto-v18-latin-regular.woff2'
import RobotoRegularTTF from './theme/assets/fonts/roboto/roboto-v18-latin-regular.ttf'
import RobotoRegularSVG from './theme/assets/fonts/roboto/roboto-v18-latin-regular.svg'
/**
 * Roboto Italic
 */
import RobotoItalicEOT from './theme/assets/fonts/roboto/roboto-v18-latin-italic.eot'
import RobotoItalicWOFF from './theme/assets/fonts/roboto/roboto-v18-latin-italic.woff'
import RobotoItalicWOFF2 from './theme/assets/fonts/roboto/roboto-v18-latin-italic.woff2'
import RobotoItalicTTF from './theme/assets/fonts/roboto/roboto-v18-latin-italic.ttf'
import RobotoItalicSVG from './theme/assets/fonts/roboto/roboto-v18-latin-italic.svg'
/**
 * Roboto 500
 */
import Roboto500EOT from './theme/assets/fonts/roboto/roboto-v18-latin-500.eot'
import Roboto500WOFF from './theme/assets/fonts/roboto/roboto-v18-latin-500.woff'
import Roboto500WOFF2 from './theme/assets/fonts/roboto/roboto-v18-latin-500.woff2'
import Roboto500TTF from './theme/assets/fonts/roboto/roboto-v18-latin-500.ttf'
import Roboto500SVG from './theme/assets/fonts/roboto/roboto-v18-latin-500.svg'

/**
 * Roboto 700
 */
import Roboto700EOT from './theme/assets/fonts/roboto/roboto-v18-latin-700.eot'
import Roboto700WOFF from './theme/assets/fonts/roboto/roboto-v18-latin-700.woff'
import Roboto700WOFF2 from './theme/assets/fonts/roboto/roboto-v18-latin-700.woff2'
import Roboto700TTF from './theme/assets/fonts/roboto/roboto-v18-latin-700.ttf'
import Roboto700SVG from './theme/assets/fonts/roboto/roboto-v18-latin-700.svg'
/**
 * Poppins
 */
import Poppins600EOT from './theme/assets/fonts/poppins/poppins-v5-latin-600.eot'
import Poppins600WOFF from './theme/assets/fonts/poppins/poppins-v5-latin-600.woff'
import Poppins600WOFF2 from './theme/assets/fonts/poppins/poppins-v5-latin-600.woff2'
import Poppins600TTF from './theme/assets/fonts/poppins/poppins-v5-latin-600.ttf'
import Poppins600SVG from './theme/assets/fonts/poppins/poppins-v5-latin-600.svg'
/**
 * Poppins 600 Italic
 */
import Poppins600ItalicEOT from './theme/assets/fonts/poppins/poppins-v5-latin-600italic.eot'
import Poppins600ItalicWOFF from './theme/assets/fonts/poppins/poppins-v5-latin-600italic.woff'
import Poppins600ItalicWOFF2 from './theme/assets/fonts/poppins/poppins-v5-latin-600italic.woff2'
import Poppins600ItalicTTF from './theme/assets/fonts/poppins/poppins-v5-latin-600italic.ttf'
import Poppins600ItalicSVG from './theme/assets/fonts/poppins/poppins-v5-latin-600italic.svg'
/**
 * Poppins 700
 */
import Poppins700EOT from './theme/assets/fonts/poppins/poppins-v5-latin-700.eot'
import Poppins700WOFF from './theme/assets/fonts/poppins/poppins-v5-latin-700.woff'
import Poppins700WOFF2 from './theme/assets/fonts/poppins/poppins-v5-latin-700.woff2'
import Poppins700TTF from './theme/assets/fonts/poppins/poppins-v5-latin-700.ttf'
import Poppins700SVG from './theme/assets/fonts/poppins/poppins-v5-latin-700.svg'
/**
 * Poppins 800
 */
import Poppins800EOT from './theme/assets/fonts/poppins/poppins-v5-latin-800.eot'
import Poppins800WOFF from './theme/assets/fonts/poppins/poppins-v5-latin-800.woff'
import Poppins800WOFF2 from './theme/assets/fonts/poppins/poppins-v5-latin-800.woff2'
import Poppins800TTF from './theme/assets/fonts/poppins/poppins-v5-latin-800.ttf'
import Poppins800SVG from './theme/assets/fonts/poppins/poppins-v5-latin-800.svg'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  html {
    font-family: sans-serif;
    text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html.no-scroll {
    position: fixed;
    /* Width 100% required as slick carousel breaks inside fixed positioned container */
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  /* roboto-300 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('${Roboto300EOT}'); /* IE9 Compat Modes */
    src: local('Roboto'), local('Roboto-Light'),
        url('${Roboto300EOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${Roboto300WOFF2}') format('woff2'), /* Super Modern Browsers */
        url('${Roboto300WOFF}') format('woff'), /* Modern Browsers */
        url('${Roboto300TTF}') format('truetype'), /* Safari, Android, iOS */
        url('${Roboto300SVG}#Roboto') format('svg'); /* Legacy iOS */
  }
  
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('${RobotoRegularEOT}'); /* IE9 Compat Modes */
    src: local('Roboto'), local('Roboto-Regular'),
        url('${RobotoRegularEOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${RobotoRegularWOFF2}') format('woff2'), /* Super Modern Browsers */
        url('${RobotoRegularWOFF}') format('woff'), /* Modern Browsers */
        url('${RobotoRegularTTF}') format('truetype'), /* Safari, Android, iOS */
        url('${RobotoRegularSVG}#Roboto') format('svg'); /* Legacy iOS */
  }
  /* roboto-italic - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: url('${RobotoItalicEOT}'); /* IE9 Compat Modes */
    src: local('Roboto Italic'), local('Roboto-Italic'),
        url('${RobotoItalicEOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${RobotoItalicWOFF2}') format('woff2'), /* Super Modern Browsers */
        url('${RobotoItalicWOFF}') format('woff'), /* Modern Browsers */
        url('${RobotoItalicTTF}') format('truetype'), /* Safari, Android, iOS */
        url('${RobotoItalicSVG}') format('svg'); /* Legacy iOS */
  }

  /* roboto-500 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url('${Roboto500EOT}.eot'); /* IE9 Compat Modes */
    src: local('Roboto Medium'), local('Roboto-Medium'),
        url('${Roboto500EOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${Roboto500WOFF2}') format('woff2'), /* Super Modern Browsers */
        url('${Roboto500WOFF}') format('woff'), /* Modern Browsers */
        url('${Roboto500TTF}') format('truetype'), /* Safari, Android, iOS */
        url('${Roboto500SVG}#Roboto') format('svg'); /* Legacy iOS */
  }

  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('${Roboto700EOT}'); /* IE9 Compat Modes */
    src: local('Roboto Bold'), local('Roboto-Bold'),
        url('${Roboto700EOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${Roboto700WOFF2}') format('woff2'), /* Super Modern Browsers */
        url('${Roboto700WOFF}') format('woff'), /* Modern Browsers */
        url('${Roboto700TTF}') format('truetype'), /* Safari, Android, iOS */
        url('${Roboto700SVG}#Roboto') format('svg'); /* Legacy iOS */
  }

  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('${Poppins600EOT}'); /* IE9 Compat Modes */
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('${Poppins600EOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${Poppins600WOFF2}') format('woff2'), /* Super Modern Browsers */
        url('${Poppins600WOFF}') format('woff'), /* Modern Browsers */
        url('${Poppins600TTF}') format('truetype'), /* Safari, Android, iOS */
        url('${Poppins600SVG}#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-600italic - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 600;
    src: url('${Poppins600ItalicEOT}'); /* IE9 Compat Modes */
    src: local('Poppins SemiBold Italic'), local('Poppins-SemiBoldItalic'),
        url('${Poppins600ItalicEOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${Poppins600ItalicWOFF2}') format('woff2'), /* Super Modern Browsers */
        url('${Poppins600ItalicWOFF}.woff') format('woff'), /* Modern Browsers */
        url('${Poppins600ItalicTTF}') format('truetype'), /* Safari, Android, iOS */
        url('${Poppins600ItalicSVG}#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-700 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: url('${Poppins700EOT}'); /* IE9 Compat Modes */
    src: local('Poppins Bold'), local('Poppins-Bold'),
        url('${Poppins700EOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${Poppins700WOFF2}') format('woff2'), /* Super Modern Browsers */
        url('${Poppins700WOFF}') format('woff'), /* Modern Browsers */
        url('${Poppins700TTF}') format('truetype'), /* Safari, Android, iOS */
        url('${Poppins700SVG}#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-800 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    src: url('${Poppins800EOT}'); /* IE9 Compat Modes */
    src: local('Poppins ExtraBold'), local('Poppins-ExtraBold'),
        url('${Poppins800EOT}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('${Poppins800WOFF2}') format('woff2'), /* Super Modern Browsers */
        url('${Poppins800WOFF}') format('woff'), /* Modern Browsers */
        url('${Poppins800TTF}') format('truetype'), /* Safari, Android, iOS */
        url('${Poppins800SVG}#Poppins') format('svg'); /* Legacy iOS */
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: #000000;
    font-size: 1.125rem;
    line-height: 1.25;
    overflow-x: hidden;
    background-color: #efefef;
  }

  div#___gatsby {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    width: 100%;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 800;
    font-family: 'Poppins', sans-serif;
    line-height: 2.125rem;
    text-rendering: optimizeLegibility;
    margin: 0;
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    text-rendering: optimizeLegibility;
    margin: 3.125rem 0 1.875rem 0;
  }

  h3 {
    font-size: 1.125rem;
    line-height: 1.375rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    text-rendering: optimizeLegibility;
    margin: 1.875rem 0 0.9375rem 0;
  }

  h4 {
    font-size: 1rem;
    line-height: 1.25rem;
    font-family: 'Poppins', sans-serif;
    text-rendering: optimizeLegibility;
    margin: 0 0 0.3125rem 0;
  }

  h1,
  h2,
  h3 {
    color: ${colors.indigo};
  }

  p,
  address {
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 0 0 1.25rem 0;
    word-wrap: break-word;
  }

  li {
    font-size: 1rem;
    line-height: 1.25rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a:not([class]) {
    text-decoration: none;
    border-bottom: 2px solid ${colors.eucalyptusGreen};
    color: ${colors.black};
    transition: color 0.15s linear;
  }

  a:not([class]):hover,
  a:not([class]):focus {
    color: ${colors.eucalyptusGreen};
  }

  hr {
    border-top: none;
    border-color: ${colors.lightGrey};
    margin: 20px 0;
  }

  address {
    font-style: normal;
  }

  ul,
  ol {
    margin: 0 0 1.25rem 0;
  }

  .slick-prev,
  .slick-prev:hover,
  .slick-prev:focus {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgOSAxNCIgd2lkdGg9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTMxLjM3ODY3OTcgMzAtNC45MzkzMzk5LTQuNjEwMDUwNWMtLjU4NTc4NjQtLjU0NjczNC0uNTg1Nzg2NC0xLjQzMzE2NSAwLTEuOTc5ODk5LjU4NTc4NjUtLjU0NjczNCAxLjUzNTUzMzktLjU0NjczNCAyLjEyMTMyMDQgMGw2IDUuNmMuNTg1Nzg2NC41NDY3MzQuNTg1Nzg2NCAxLjQzMzE2NSAwIDEuOTc5ODk5bC02IDUuNmMtLjU4NTc4NjUuNTQ2NzM0LTEuNTM1NTMzOS41NDY3MzQtMi4xMjEzMjA0IDAtLjU4NTc4NjQtLjU0NjczNC0uNTg1Nzg2NC0xLjQzMzE2NSAwLTEuOTc5ODk5eiIgZmlsbD0iIzJkMmY3ZiIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMzUgLTIzKSIvPjwvc3ZnPg==');
    background-color: ${colors.white};
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .slick-next,
  .slick-next:hover,
  .slick-next:focus {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgOSAxNCIgd2lkdGg9IjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTMxLjM3ODY3OTcgMzAtNC45MzkzMzk5LTQuNjEwMDUwNWMtLjU4NTc4NjQtLjU0NjczNC0uNTg1Nzg2NC0xLjQzMzE2NSAwLTEuOTc5ODk5LjU4NTc4NjUtLjU0NjczNCAxLjUzNTUzMzktLjU0NjczNCAyLjEyMTMyMDQgMGw2IDUuNmMuNTg1Nzg2NC41NDY3MzQuNTg1Nzg2NCAxLjQzMzE2NSAwIDEuOTc5ODk5bC02IDUuNmMtLjU4NTc4NjUuNTQ2NzM0LTEuNTM1NTMzOS41NDY3MzQtMi4xMjEzMjA0IDAtLjU4NTc4NjQtLjU0NjczNC0uNTg1Nzg2NC0xLjQzMzE2NSAwLTEuOTc5ODk5eiIgZmlsbD0iIzJkMmY3ZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2IC0yMykiLz48L3N2Zz4=');
    background-color: ${colors.white};
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }

  .slick-prev::before,
  .slick-next::before {
    content: none;
  }

  /*Desktop Styles*/
  @media (min-width: 768px) {
    h1 {
      font-size: 3.5rem;
      line-height: 4.25rem;
    }

    h2 {
      font-size: 2rem;
      line-height: 2.375rem;
      margin-top: 3.75rem;
    }

    h3 {
      font-size: 1.5rem;
      line-height: 1.8125rem;
      margin: 2.5rem 0 0.9375 0;
    }

    h4 {
      font-size: 1rem;
      line-height: 1.25;
      font-family: 'Poppins', sans-serif;
      text-rendering: optimizeLegibility;
      margin: 0 0 0.9375rem 0;
    }

    p,
    address {
      font-size: 1.125rem;
      line-height: 1.6875rem;
    }

    li {
      font-size: 1.125rem;
      line-height: 1.6875rem;
    }

    hr {
      margin: 40px 0;
    }
  }
`

export const SiteWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  background-color: ${colors.white};
`
