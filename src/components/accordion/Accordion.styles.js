import styled from 'styled-components'

// const hotPink = css`
//   background-color: hsl(339, 87%, 55%);
//   color: white;
// `

// const blueish = css`
//   background-color: hsl(228, 57%, 58%);
//   color: white;
// `

// const yellow = css`
//   background-color: hsl(46, 100%, 68%);
//   color: black;
// `

// // we want consistent colors for tags we might not have seen
// const tagStyles = [hotPink, blueish, yellow]

// const knownValueStyles = {
//   Nightlife: yellow,
//   Music: blueish,
//   'Plays & Theatre': hotPink,
// }

// const selectTagStyle = (value) =>
//   knownValueStyles[value] || tagStyles[hash(value) % tagStyles.length]

export const AccordionButtonTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.5;
  padding-right: 2rem;
  margin: 0 0 0 1rem;
  text-align: left;
  width: 100%;
  z-index: 1;
`

export const AccordionButton = styled.button`
  align-items: flex-start;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  border: 0;
  box-sizing: border-box;
  color: #161616;
  cursor: pointer;
  display: inline-block;
  display: flex;
  flex-direction: row-reverse;
  font-family: inherit;
  font-size: 100%;
  justify-content: flex-start;
  margin: 0;
  min-height: 2.5rem;
  padding: 0.625rem 0;
  position: relative;
  transition: background-color 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
  vertical-align: baseline;
  width: 100%;
`

export const AccordionChevron = styled.svg`
  fill: #161616;
  flex: 0 0 1rem;
  height: 1rem;
  margin: 2px 1rem 0 0;
  outline: 2px solid transparent;
  outline-offset: -2px;
  transform: rotate(-270deg);
  transition: all 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
  width: 1rem;
`

export const AccordionContainer = styled.ul`
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  width: 100%;
`

export const AccordionItemContainer = styled.li`
  border-top: 1px solid var(--cds-ui-03, #e0e0e0);
  overflow: visible;
  transition: all 0.11s cubic-bezier(0.2, 0, 0.38, 0.9);
`

// //
// // Copyright IBM Corp. 2018, 2018
// //
// // This source code is licensed under the Apache-2.0 license found in the
// // LICENSE file in the root directory of this source tree.
// //

// @use '../../config' as *;
// @use '../../breakpoint' as *;
// @use '../../motion' as *;
// @use '../../theme' as *;
// @use '../../spacing' as *;
// @use '../../type' as *;
// @use '../../utilities/button-reset';
// @use '../../utilities/component-reset';
// @use '../../utilities/convert';
// @use '../../utilities/focus-outline' as *;
// @use '../../utilities/high-contrast-mode' as *;

// /// @type Value
// /// @access public
// /// @group accordion
// $flex-direction: row-reverse !default;

// /// @type Value
// /// @access public
// /// @group accordion
// $justify-content: flex-start !default;

// /// @type Value
// /// @access public
// /// @group accordion
// $arrow-margin: 2px $spacing-05 0 0 !default;

// /// @type Value
// /// @access public
// /// @group accordion
// $title-margin: 0 0 0 $spacing-05 !default;

// /// @type Value
// /// @access public
// /// @group accordion
// $content-padding: 0 0 0 $spacing-05 !default;

// @mixin accordion {
//   .#{$prefix}--accordion {
//     @include component-reset.reset;

//     width: 100%;
//     list-style: none;
//   }

//   .#{$prefix}--accordion__item {
//     overflow: visible;
//     border-top: 1px solid $border-subtle;
//     transition: all $duration-fast-02 motion(standard, productive);

//     &:last-child {
//       border-bottom: 1px solid $border-subtle;
//     }
//   }

//   .#{$prefix}--accordion__heading {
//     @include button-reset.reset;

//     position: relative;
//     display: flex;
//     width: 100%;
//     min-height: convert.rem(40px);
//     flex-direction: $flex-direction;
//     align-items: flex-start;
//     justify-content: $justify-content;
//     padding: convert.rem(10px) 0;
//     margin: 0;
//     color: $text-primary;
//     cursor: pointer;
//     transition: background-color motion(standard, productive) $duration-fast-02;

//     &:hover::before,
//     &:focus::before {
//       position: absolute;
//       top: -1px;
//       left: 0;
//       width: 100%;
//       height: calc(100% + 2px);
//       content: '';
//     }

//     &:hover::before {
//       background-color: $layer-hover;
//     }

//     &:focus {
//       outline: none;
//     }

//     &:focus::before {
//       @include focus-outline('outline-compat');
//     }
//   }

//   // Size styles
//   .#{$prefix}--accordion--lg .#{$prefix}--accordion__heading {
//     min-height: convert.rem(48px);
//   }

//   .#{$prefix}--accordion--sm .#{$prefix}--accordion__heading {
//     min-height: convert.rem(32px);
//     padding: convert.rem(5px) 0;
//   }

//   // Disabled styles
//   .#{$prefix}--accordion__heading[disabled] {
//     color: $text-disabled;
//     cursor: not-allowed;
//   }

//   .#{$prefix}--accordion__heading[disabled] .#{$prefix}--accordion__arrow {
//     fill: $icon-disabled;
//   }

//   .#{$prefix}--accordion__heading[disabled]:hover::before {
//     background-color: transparent;
//   }

//   .#{$prefix}--accordion__item--disabled,
//   .#{$prefix}--accordion__item--disabled + .#{$prefix}--accordion__item {
//     // v10 icon doesn't have 1:1 translation, keeping color same as enabled state
//     // https://github.com/carbon-design-system/carbon/issues/10373#issuecomment-1021638147
//     border-top: 1px solid $border-subtle;
//   }

//   li.#{$prefix}--accordion__item--disabled:last-of-type {
//     // v10 icon doesn't have 1:1 translation, keeping color same as enabled state
//     // https://github.com/carbon-design-system/carbon/issues/10373#issuecomment-1021638147
//     border-bottom: 1px solid $border-subtle;
//   }

//   .#{$prefix}--accordion__arrow {
//     @include focus-outline('reset');

//     width: 1rem;
//     height: 1rem;
//     // Without flex basis and flex shrink being set here, our icon width can go
//     // <16px and cause the icon to render in the incorrect artboard size
//     flex: 0 0 1rem;
//     margin: $arrow-margin;
//     fill: $icon-primary;
//     transform: rotate(-270deg) #{'/*rtl:ignore*/'};
//     transition: all $duration-fast-02 motion(standard, productive);
//   }

//   .#{$prefix}--accordion__title {
//     @include type-style('body-01');

//     z-index: 1;
//     width: 100%;
//     margin: $title-margin;
//     text-align: left;
//   }

//   .#{$prefix}--accordion__content {
//     display: none;
//     padding-right: $spacing-05;
//     padding-left: $spacing-05;
//     // Transition property for when the accordion closes
//     transition: padding motion(standard, productive) $duration-fast-02;

//     // Custom breakpoints based on issue #4993
//     @include breakpoint-up(480px) {
//       padding-right: $spacing-09;
//     }

//     @include breakpoint-up(640px) {
//       padding-right: 25%;
//     }

//     > p {
//       @include type-style('body-01');
//     }
//   }

//   .#{$prefix}--accordion--start .#{$prefix}--accordion__heading {
//     // Reverse `$flex-direction` token:
//     flex-direction: row;
//   }

//   .#{$prefix}--accordion--start .#{$prefix}--accordion__arrow {
//     // Alters `$arrow-margin` token:
//     margin: 2px 0 0 $spacing-05;
//   }

//   .#{$prefix}--accordion--start .#{$prefix}--accordion__title {
//     margin-right: $spacing-05;
//   }

//   .#{$prefix}--accordion--start .#{$prefix}--accordion__content {
//     margin-left: $spacing-07;
//   }

//   .#{$prefix}--accordion__item--collapsing .#{$prefix}--accordion__content,
//   .#{$prefix}--accordion__item--expanding .#{$prefix}--accordion__content {
//     display: block;
//   }

//   @keyframes collapse-accordion {
//     0% {
//       @include -content-visible;
//     }

//     100% {
//       @include -content-hidden;
//     }
//   }

//   @keyframes expand-accordion {
//     0% {
//       @include -content-hidden;
//     }

//     100% {
//       @include -content-visible;
//     }
//   }

//   .#{$prefix}--accordion__item--collapsing .#{$prefix}--accordion__content {
//     animation: $duration-fast-02 motion(standard, productive) collapse-accordion;
//   }

//   .#{$prefix}--accordion__item--expanding .#{$prefix}--accordion__content {
//     animation: $duration-fast-02 motion(standard, productive) expand-accordion;
//   }

//   .#{$prefix}--accordion__item--active {
//     overflow: visible;

//     .#{$prefix}--accordion__content {
//       display: block;
//       padding-top: $spacing-03;
//       padding-bottom: $spacing-06;
//       // Transition property for when the accordion opens
//       transition: padding-top motion(entrance, productive) $duration-fast-02,
//         padding-bottom motion(entrance, productive) $duration-fast-02;
//     }

//     .#{$prefix}--accordion__arrow {
//       fill: $icon-primary;
//       transform: rotate(-90deg) #{'/*rtl:ignore*/'};
//     }
//   }

//   // Skeleton state
//   .#{$prefix}--accordion.#{$prefix}--skeleton .#{$prefix}--accordion__heading,
//   .#{$prefix}--accordion.#{$prefix}--skeleton .#{$prefix}--accordion__button {
//     cursor: default;
//   }

//   .#{$prefix}--accordion.#{$prefix}--skeleton .#{$prefix}--accordion__arrow {
//     cursor: default;
//     fill: $icon-primary;
//     pointer-events: none;

//     &:hover,
//     &:focus,
//     &:active {
//       border: none;
//       cursor: default;
//       outline: none;
//     }
//   }

//   .#{$prefix}--accordion.#{$prefix}--skeleton
//     .#{$prefix}--accordion__heading:hover::before {
//     background-color: transparent;
//   }

//   .#{$prefix}--accordion--end.#{$prefix}--skeleton
//     .#{$prefix}--accordion__arrow {
//     margin-left: $spacing-05;
//   }

//   .#{$prefix}--skeleton
//     .#{$prefix}--accordion__heading:focus
//     .#{$prefix}--accordion__arrow {
//     border: none;
//     cursor: default;
//     outline: none;
//   }

//   .#{$prefix}--accordion__title.#{$prefix}--skeleton__text {
//     margin-bottom: 0;
//   }

//   // Windows HCM fix
//   .#{$prefix}--accordion__arrow,
//   .#{$prefix}--accordion__item--active .#{$prefix}--accordion__arrow {
//     @include high-contrast-mode('icon-fill');
//   }
// }

// @mixin -content-visible {
//   height: 100%;
//   opacity: 1;
//   visibility: inherit;
// }

// @mixin -content-hidden {
//   height: 0;
//   opacity: 0;
//   visibility: hidden;
// }
