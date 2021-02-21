import React from 'react'
import { StyledSvg, StyledPath } from './RipVariant.styles'
import { RipVariantProps } from './RipVariant.types'

export const RipVariant3: React.FC<RipVariantProps> = props => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2400 147"
    {...props}
  >
    <StyledPath d="M2396.33 111.526c-2.5 0-5 .5-7.5.5-3.16 0-6.66-1.167-9.33 0-4.67 2.167-9-.167-13.5 0-2.67 0-3.67.833-3.67 3.167 0 3.833-1.16 4.5-4.5 2.333-1.66-1.167-3.83-2.167-4.33 1.667-.33 2.833-9.5 5.333-11.67 3.5-.5-.334-.5-1.5-.5-2.334-.16-2.166-.5-4-3-1.833-1.83 1.5-3.33 3.167-5 4.667-3.16 2.833-6.33 5.666-9.66-.167-.17-.333-1.5 0-2-.333-4.34-1.667-8.67-2.167-13.34-1-4 1-8.66 0-12.5 1.333-4.16 1.5-7.16.167-11-.667-7.16-1.833-14.5-2.833-21.83-3.333-3.67-.167-7.5 2.167-11.17 2-4.33-.167-7.66 1.333-11.33 3-3.67 1.833-8 2.667-12 3.667-3.17.833-6.33 1-9.5 1.666-5.67 1-11.33 3-16.33-1.666-.67-.5-1.84-.334-2.84-.5 0 .833 0 1.833-.16 2.666-.34.834-.84 1.667-1.67 2-1 .667-2.33.834-3.5 1.334-1-.167-2.33-1-2.83-.667-4.67 3.5-9.5 1.833-14.34 1-.83-.167-1.83-.333-2.66-.5l-.34.333c-.33-.166-.5-.5-.83-.666-.83-.167-1.5-.334-2.33-.5.5 1.166 1 2.333 1.5 3.333-1.5-.333-3.34-.333-4.17-1.333-2.17-2.5-3.33 1.166-4.83.666l-.17-.166h.17c.5-1.667.33-3.167-1.67-2-1.67 1-3 .5-4.17-.167-3.66-2-7.16-4-10.83-6-1.17-.333-2.33-.5-3.5-.667-.5 0-.83-.166-1.33-.166-3.17 3.166-6.5 1-9.84.833-2.66-.167-5.33-.667-8-1.167-.83-.166-2-.833-2.5-1.5-1.33-2.5-3.33-2.833-5.83-2.5-3.83.5-7.83 7.5-11.67 7.667-2.16 0-4.33-.5-6.5-1.167-2.66-.666-5 6.167-7.66 5.667-2.84-.5-5-1.5-7.5-3-2-1.333-4.5-3.333-7.5-1-1 .833-3.34.667-4.67.167-6.17-2.334-12.5 5.333-18.83 4.5-.67-.167-1.5-.334-2.17-.667-.33-.167-.5-.333-.67-.667-2-1.833-4.5-.666-6.66-1.166-2.17-.667-3.67 2.166-6.67 3-3.5 1.166-5.83-1.334-7.83-3.667-1.67-2-3.34-2.667-5.84-2.667-1.66 0-3.33-.333-4.83-1-2.67-1.166-5.17-2.833-8-3.833-1.5-.5-4 .5-5.17-.333-3.33-2-4.83-4.167-6.16-1.167-1.34 3-4.5 2.333-6.84 2.667-2.33.333-4.83-.167-7.16-.834-1.34-.333-3-1-3.67-2-2-3.5-3.83 9.5-5.33 5.834-.67-1.834-1.67-2.334-3.34-2.167v.167l-.16-.167c-.67-1-1.5-1.333-2.34-1.333l-.16 9 .16-9c-2.16 0-5 2-7.5 1-3.5-1.334-7.33 8.666-10.33 6-2.33-2.167-5.83-2.167-9-2-2.33.166-4.33 0-6.17-1.834-1.83-1.833-3.83-1.5-5.66 0-1.5 1.167-2.67 2.5-4.17 3.5-.17.167-1.5-.5-1.67-1-1-4-6-2.5-7.5-5.666 0 0-.66.166-.83.333-1.5 4.333-2.67.333-4-.167-1.5-.666-3.5-2.166-4.33-1.666-3.17 2-4-.5-5.17-2.167-2-3.333-5 4.5-8.5 3.167-.83-.334-1.83-1-2-1.667-.67-2.333-1.17-3.667-2.67-.5-.16.167-.83.333-1.16.167-2.67-2-5.34-4-8-5.834-.34-.333-.84-.833-1-.833-3.34 1.333-5.67-2-8.84-2.167-3-.166-6.16-1.666-8.66-3.333-1.84-1.167-3.5-1.833-5.84-1.5-2.83.5-5.16-.667-7.33-3-1.33-1.5-3.67-2.167-5.17-3.5-3.5-3.167-7-5.5-12.16-6-4.34-.5-8.5 9-12.67 7.5-.5-.167-1.33-.833-1.67-.5-3.83 2.667-7.33-.333-10.83-1-2.83-.5-5.67 10.667-8.67 10.5-3.16-.167-6.16-3-9.33-4.5 1.33-2.833-1-1.833-2-1.833-2.83-.167-5.17 9-7.17 6.666-.83-1.166-3.66-1.333-5.33-1.166-2.33.333-4-.334-6.17-2-1.5-1.167-3.66-1.834-5.66-1.834-1.5 0-2.67 0-4.17-.833-2.33-1.333-5.33.167-6.17 3-.33 1-.5 2.167-1.16 3-1 1-1.84 3.667-3.84.833-1-1.5-4.33-1.166-3.5-4.166 0-.167-.83-.667-1.33-.834-.17 0-.5.334-.83.5-3.17 1.667-3.17-3.333-6.17-3-3 .5-4.17-1.166-4.17-4.166 0-.5-.5-1-.83-1.5-1.83-2.5-3.5-5.334-5.83-7.5-1.84-1.834-4.17-3-6.34-4.167-1.5-.834-3.16-3.334-5.16-.5-.5-.5-1.17-1-1.67-1.5-1.83-1.167-3.67-2.334-5.33-3.667-1-.666-1.67-2-2.84-.166-.16.333-.33.5-.66.666-.5-.833-1-1.5-1.34-2.333-.33.333-1 .833-1.16.833-.67-.333-1.34-.833-1.67-1.333-.67-1.334-1.5-1.5-2.83-.834-4 1.834-6 1.167-7.17-3.166-.83-3.167-3.83-2.334-5.17-4-.83.666-1.83 1.333-2.5 2.333-.5.5-.16 1.834-1.16.334-.34-.667-1.5-1.167-2.34-1.167-6.66.5-10.66-4-15.83-7-3-1.667-6.33-3.333-10.67-2.5-3.5.666-7.5-.5-11.33-.167-2.83.167-5.67 0-8.67 1.167-5 1.833-10.16 1.333-15.16-.667-1.84-.833-4.84-.5-5-3.833 0 0-1.5-.334-2 0-2.34 1.333-4.34.166-5.67-2-1.33-2-3.67-3.334-5.67-5-.83-.667-2-.834-2.5-1.667-2-4-6.66-3.666-9.5-6.5 0 0-.66.334-1 .667-.5.333-.83.666-1.16 1.166-1.84-2.666-5.5.834-7.17-2.166-.17-.167-1.17-.167-1.67 0-3 1.666-5-1.334-7.5-2-2-.5-3.83-1.5-5.5-2.667-3.16-2.166-6.33-4.666-9.33-7-1-.666-1.67-1.833-2.67-2.5-.5-.333-1.5-.167-1.83.167-3 2.333-3.67 2.333-6.5.166-1.33-1-2.33-3.833-4.83-1.5-.34.167-2.34-.833-3-1.666-2.67-4-7.34-3.667-11.17-4.834-2.33-.833-4.83-1-7.5-.666-2.83.333-5.83-1.167-8.83-1.334-4.17-.166-8.34-.333-12.34.167-2 .333-4-.667-6.16.833-1.5 1-4.5 1.167-6.34.334-2.33-1-5-.334-7.5-2.167-2.66-1.833-6.5-1.833-9.66-2.833-2.34-.667-4.5-1.334-6.84-2.167-3.33-1.333-4-1.166-5.33 2.333-.17.334-.33.834-.33 1.167-.17-.333-.67-.667-.67-1 .5-3.333-2.5-3-3.67-2.5-3.66 1.5-7.83.5-11.16 2.667-1.17.833-2.17 1.666-3.5 2.166-1.84.667-3.67.834-5.5 1.167-.17 0-.5-.167-.67-.333-2-2-1.67-1.5-4.33-.5-3.5 1.166-4.17 2.833-3 6 .33 1-.34 2.333-.67 3.5-.17.5-1 1-1.17 1-4.33-2-4.16-.667-1.83 2.333v.5c-4 1.167-.5 3.667-1 5.334-.17.333 0 .833-.17 1.333-.5-.334-1.16-.5-1.33-1-.83-2.834-2.83-3.834-5.33-5.334-3.34-2-7.67-3.5-9.5-7.666-.67-1.334-1.84-3-3.17-3.5-2.83-1.334-5.17-3-6.5-6-.33-.834-2-1.5-2.83-1.5-1.67.166-.84 1.166-.67 2.333.17.5-1.5 2-2.17 2-2.16-.5-4.66-.5-4.66-4 0-2-1-3.167-3.5-3.667-2.67-.5-6.17-.833-7.67-4.166 0-.167-1 0-1 .167 0 1.5-.67 2.833-2.17 1.833-1.33-.833-3-2.5-3-3.833 0-1.834-.33-2-2-1.5-.83.166-2.16.333-2.5-.167-2-2.833-4.33-1.167-6.5-.833-2.33.333-4.5.5-6.83.833h-.83c-1-2.833-3.34-2.833-5.34-2-1.83.667-3.5 1.833-5.16 3-1.17.833-1.67.833-3-.167-2-1.666-4.5-2.833-7.17-3.166-.5-.167-1.17-.667-1.5-.5-4 1.666-4.33 1.5-8.17-.834-.33-.333-1.33 0-1.83.334-2 1-3.67 1.5-5.5-.334-.83-.833-3.17-2.833-4.17.5-.16.334-.83.834-1 .667-3.5-2.5-6.5 1.667-9.83 1-.5-.167-1.17.5-1.67.5-4.5 0-4.5 0-6.83 2.333-.33.5-.67 1.334-1 1.334-2.83.333-5.67.333-8.33.666-.5 0-.84 1-1.34 1-1.83-.166-4 2.834-5.66-.5-.84-1.5-2.17-.833-1.84.5.84 3.167-1.5 1.334-1.83 1-2.83-1.5-4.67-1.5-7.5.334-3.33 2.333-8 3-9.83 7.333-.17.666-1.67 1.333-2.34 1-3.66-1.167-5.33 2-7.83 3.5-1.67 1-3.17 2.333-4.67 3.333-.16 0-.5-.333-.83-.5-.67-.5-1.17-1-1.83-1.5-.34.833-.67 1.667-.84 2.333-.16.834.34 1.834 0 2.667-.66 2.333-1.33 4.834-2.16 7.167-1.17 3.166-2.34 6.333-3.34 9.666-.66 2.167-2.16 3.167-3.5 1.667-2.5-3-3.33.334-3.16 1.167.33 1.833-.5 1.833-1.84 2.666-2.16 1.334-4 3.5-5.83 5.334-3.17 3.333-6.33 6.833-9.17 10.5-1.16 1.5-2.16 2.333-4 1.333-.5-.333-1.16-.166-1.83 0-.67.167-1.17.667-1.67 1 .5.334.84.5 1.34.834.33.166 1.16.166 1.16.333.17.666.17 1.5-.16 2.166 0 .167-1 .167-1.5 0-.34-.166-.67-.666-1-1-5.17-4.166-10.67-4.166-16.5-1-.67.334-1.5.667-2.17.5-5.17-1.333-10.33-2.5-15.17-4.5-2.33-.833-4-3.166-6-4.833-1-1-1.66-1.333-2.5.334-1.33 2.666-4.33 1.666-6.5 2.166-1.83.334-4 .667-5.66-1.333-1-1.167-2.67-1.834-4-2.834-.67-.333-1.67-1-1.67-1.333.17-4.333-3.17-1.666-4.33-1.666-2.17 0-1.34 2-1 3.5.16.666-.34 1.666-.5 2.5-.5-.5-1-1-1.34-1.5-.83-1-1.5-2.167-2.33-3.334-2.67-.333-2.17 1.167-1.67 2.834.17.666.34 1.5.34 2.333-.5-.334-1-1-1.5-1.167-.84-.333-2.17-1-2.34-.833-2.16 3-4.5.333-6.83.333-4.67-.166-9.33-.5-13.83-.166-1.34.166-2.67 2-4 3.166-.5.334-.84.667-1.34 1 .17-.5.17-1 .17-1.666 0-.834 0-1.667-.33-2.334-.17-.333-1.17-.166-1.67-.166v2.333c.33 3.166-2.17 5-3.83 7.333-.17.167-.5.167-.84.167-3.66-.334-4.5 1-7 2.833-3.16 2.334-3.16 7.167-7.66 8.334-3.34.833-6.67 2.5-10.34 1.333-.66-.167-1.66-.334-2.16 0-3 2.333-5.5 1.166-8-1-.34-.334-.84-.667-1.17-.5-1.5.333-2.83.833-4.17 1.333.34 1 .67 2 1.17 3l1.5 3c-1.67.5-3.33 1.334-5 1.334-2.83 0-5.83-.834-8.67-.334-1.83.334-3 2.667-4.66 4-1.17 1-3 2.667-3.17-.833 0-.334-.5-.667-.67-.834-.16 0-.66.334-.66.5.33 2.667-1.67 3.667-3.5 4.667-.5.334-.84.834-1 1.334-.34 1.833-1 2.333-2.84 1.333-.33-.167-1.33 1-2.16 1.667.5 1 1.16 2 1.33 3.166.17.334-.5 1-.83 1.5-2.5-2.5-2.5 1.334-4.17 1.667-1.67.333-3.17 1.667-4.83 2.333-2.67 1.334-3.503.167-5.837-2.333-2.5-2.833-4-7-8.666-7.667-.5 0-.834-1-1-1.666-.334-.834-.334-2.167-1-2.334-3.167-1.666-6.334-3.666-9.834-4.666-3-1-6.5-.334-9.333-1.334-1.5-.5-4.167 1.5-4.833-1.5-.834.667-3.334-.166-2.167 2.334.167.333-.5 1.333-.667 1.333a84.257 84.257 0 01-9.333-1c-1.5-.167-3.5-1.834-4.5-1.334-2 1-3.833 2.667-4.833 4.5-1 2-2.5 1.667-3.667 1.5-3.333-.666-4.667 1-5.333 4.001-.834 3.666-1.334 3.833-4.5 2.666-2.167-.833-4.334-1.333-6 1-.167.334-1 .667-1 .667-2.334-2.833-3.334.167-4.834 1-.166.167-.5.333-.666.5-2.334-4-4.667-.333-6.334.5-1.833 1-2.166 1.667-2-.833 0-.334-.333-.834-.5-1.167-.5.333-1.166.667-1.166 1-.334 1.667-.5 3.167-.834 4.833 0 .334-.5.667-.666 1-.167-.333-.334-.666-.5-1.166-.334-.834-.667-1.834-1-2.667-.834 1-2 1.833-2.334 2.833-1.5 3.834-2 4.167-5.833 2.167-5-2.667-10.333-1.667-14 2.833-.667.834-1.667 1.334-2.667 2-3.666 2.167-7.166 4.667-11.166 6.167-2.5 1-5 1.333-5.167 4.833-.333-.166-.667-.166-1-.333-.833-.667-2.333-2-2.333-1.833-1.334 1.333-4-.167-4.834 2.166-1 2.167-4.333 2-4.666 4.834-.667-.334-1.667-1-2-.834-.667.334-.834 1.334-1.334 2.167-.666-.667-1.5-1.333-2-2.167-2.5-4.5-3.833-9.833-8-13.5-.333-.333-.666-.833-1-1.166 1.667 2.166-3.166.833-1.666 3.166.5.834.166 2.167.166 3.167 0 .5-.833.833-1.166 1.167-.334-.5-.667-1-.834-1.5-.5-1.667-1.833-1.667-2.666-.667-1 1.167-1.5 2.833-3.334 1-.166-.167-1.166.333-1.5.833-.833 1.5-1.5 1.167-2.666.167-1-.667-3.5-1.167-3.834-.667-1.333 1.834-2 1.167-3.5.167-2-1.167-2.166-1.833-.5-3.167.167-.166 0-.666-.166-.833-.334-.167-1-.167-1.167 0-.5.667-1 1.5-1.333 2.333-.334.667-.5 1.5-.834 2.334-.5-.834-1-1.667-1.333-2.667-1.167-.167-2.5.167-2.167-2.167.334-2.333.667-5.333-.5-7-1.333-2.166-4.166-4-6.666-4.5-1.834-.333-4.334 1.5-4 4.5 0 .5-.834 1-1.167 1.667 0-.667-.167-1.333-.167-2-.166-.833-.166-1.667-.333-2.333-.333.5-.833 1-1 1.666-.167 1.334-.833 1.667-1.667.667-.833-1.167-1.333-2.5-1.833-4-.167-.667.167-1.667-.167-2.167-.833-1-2.166-2.5-2.833-2.333-1.333.333-2.667 1.5-1.5 3.5.333.5-.333 1.5-.333 2.167-.334-.5-1.167-1-1.167-1.667-.167-1.833-1.167-2.333-2.667-2.167v.167l-.166-.167h.166c.167-1.666.5-3.5.5-5.166 0-.334-.333-.834-.5-1.167-.333.167-1 .333-1 .667-.666 1.333-1.166 2.833-1.666 4.333-1-1.167-1.834-2.667-3.167-3.167-1.167-.5-3.5-.333-4.167.5-1.5 1.5-2.166 3-3.166-.166-2.667.666-4.5-4.667-7.834-1.334-.5.5-3-.166-4-.833-5.333-4-11.333-5.5-17.666-6.5-1.334-.167-2.667-.5-4-.834-2.167-.833-4.667-1.5-6.5-2.833-3.667-2.666-7.834-3.5-12.167-4.166-1.667-.167-3.333-.5-1.667-2.667.167-.167-1.166-1.334-1.666-2-.334.5-.5 1-.834 1.5-.166.333-.166.833-.166 1.166-.5-.166-1.167-.166-1.167-.333-.833-4.666-3.667-1.833-5.833-1.666l.166.166c-.833-.5-1.833-1.666-2.5-1.5-4.333 1.334-7.5-.333-10.333-3.5-3.333-3.666-8-4.166-12.333-3.666-2.834.333-5.5-.5-8.334 0-1 .166-2.333.166-3.333.166-.833-.166-1.833-.5-2.167-1-.666-1-.5-3.5-2.166-2.5-1.5 1-5-.166-4.334 3.667.334 1.666-.333.833-1.166 0-1.167-1.167-3.334 1.5-4.667-.834-.167.334-.5.667-.5 1 .167.667.667 1.334.833 2.167.167 1-.166 2-.166 3-.834-.333-1.667-.666-2.334-1.166l-1.5-1c-.333-.167-1.166 0-1.166.166-.167.334-.167 1 0 1.5.5.834 1.166 1.334 1.666 2.167.5.833.667 1.666.834 2.5-.834-.5-1.834-.834-2.5-1.334-.667-.5-1-1.166-1.5-1.666-1.334-2-1.167-1.334-3.667-1-4 .5-7 4.833-11.5 2.5-.167-.167-1.333 1-1.833 1.666-.334.5-.667 1.167-.834 1.834-.333-.667-.666-1.5-.666-2.167 0-1.5.166-3 .166-4.333 0-.5-.333-3.334-1.333-.167-.333.834-2.167 1.167-3.167 1.667.834 1 2 2 2.5 3.166.667 1.834-.666 1.5-1.833 1.334v.166c-2-1.333-5-2-3.167-5.5.167-.333-1-1.833-1.666-2-1.334-.333-1.834.5-1.667 2 .167.834-.333 1.834-.333 2.667 0 1 .333 2 .5 2.834-1.167-.5-2.167-1.334-3.334-1.667-1.166-.334-2.166-3.5-3.666-.334l-3.5-2.5c-.667-.5-1.5-.833-1.667-1.5-.333-1.5.333-2.833-2.333-2.833-1.5 0-2.834-1.166-2.834 1.334 0 .166-1.166.5-1.666.333-.5-.167-1-1-1-1.167 1.666-4.333-2.167-3.5-4.167-4.333-1-.5-2.833-.667-3-1.5-1.333-4.167-4-2.5-6-1.167-2.5 1.5-4.5-.333-6.167-1-4.5-1.666-9-3.166-14-2.5-3.833.5-7.833-.166-11.833-.5-.667 0-1.833-.5-2-.833-.667-2.667-2.833-3.333-5-4.167-1-.333-2.333.167-3-.333-1-.834-1.667-2.167-2.333-3.334-.167-.166-.5-.333-.834-.166-4.666.333-4.666.333-8.833-2.167-.333-.166-1.167-.333-1.5-.166-1.667 1.166-2.167-.167-2.833-1.167-.667-.834-1-1.834-1.667-2.667-3-3.166-4.167-3-6.167 1.167h-.166c-1-.334-2.5-.167-3-.834-3.667-4.5-8.334-5.666-13.834-5.5-1.833 0-3.666 0-5.5-.333-4-.5-8-.5-12 .667-2.833.833-6.166-.167-9.333-.5-2.167-.167-4.5-.834-6.667-1-1.333-.167-2.666.5-3.833.666-.667 0-1.333-.166-2-.333-.333-.166-.5-.5-.833-.833-1.667 2-4.5-2-6.167 1-.167.166-1.667.166-2-.334-3.667-4.5-8.833-3.333-13-2.166-4.5 1.333-7.167-1.334-10-3.167-2-1.166-3.667-2.833-6.167-3-1.5 0-3.5-.333-4.333-1.166-2.833-3.5-6.833-2.667-10.333-3.334-1.834-.333-4-1-5 1.667 0 .166-.167.333-.334.333-1.333 0-2.666-.5-3.833-.166-1.167.333-2 1.833-3.167 2-2.333.5-5.666-.334-7.166.833-2.167 2-4.834 1-6.834 2.5-1.666 1.333-3.666 2-5.833.666-.833-.5-2.5 0-3.833.334-2 .5-3.834 1.166-5.834 1.666l.167-.166c-2.667 1.666-5.167 3.333-7.667-.334-.5-.666-2.666-.666-3.833-.333-2.167.5-4 2.334-6.5 1.334-.333-.167-1.167.5-1.333 1-1.334 2.833-2.334 2.5-3.667 0 0-.167-1.5.166-2 .666-1 .834-1.667 2-2.5 3 .833.167 1.667.5 2.5.334 1.5-.167 2 .166 1.667 1.666-.167.667-.167 1.167-.334 1.834l-1 3.5c-1-.667-2-1.167-2.833-1.834-1.333-1.166-2.5-3-3.5.334-.167.5-1.5.833-2 1.333-.5.333-.667 1-1 1.666.667.167 2 .667 2.167.5 3.333-4.166 3.666-1.333 4.166 1.667.167.5 1 1.167 1 1.5-.166.667-.666 1.834-1.333 2-2 .667-3.667-2.333-6-.833-.167-.834-.333-1.667-.667-2.5-.333-.667-.833-1.167-1.333-1.667-.5.667-1.5 1.5-1.5 2 .667 2.5-.667 2.334-2.5 2.334-3.667.166-7.167.666-10.5-1.5-.333-.167-1 .166-1.5.333 1.5 3-2.333 4.833-1.667 7.833.5 2-1 2.667-2.833 1.667-.667-.334-1-1.167-1.667-1.5-.333-.167-1.166.5-1.5 1-.333.666-.333 1.5-.5 2.166l-1.5-2c-1.333-1.666-2.5-3.5-4-5.166-.166-.167-2 .833-2.5 1.666-1.5 2.167-1.166 2-3.166.5-2.5-1.833-5.334-3.333-8-5-1.334-.833-2.834-1.5-4.167-2.5-.667-.5-1.5-1.666-2-1.5-4.333 1.5-2.167-1.833-2-2.833.167-1.166 1.5-2-.5-2.833-1.167-.5-1.667-1.667-3.667-.667-2.5 1.334-5.833.834-8.833.834-1.167 0-2.5-.834-2 1.5 0 0-1 .5-1.167.333-.833-1-1.333-2-2-3-.333-.334-.666-1.167-1-1.167-4 0-4 0-6.166-1.333-.334-.167-1.167 0-1.334.166-1.5 2-3.5 2.834-6 2.167-.833-.166.834-2.666 4.334-4 2.666-1 1.333-1.666.5-2.833l.166.166c.5-.666 1-1.166 1.5-1.833-5.5-.5-11-2.5-16.5.167-.666.333-2.666-.667-2.666-.5-.834 1.833-2 3.166-4 3.666.166.334.5.834.666 1.167.5 1.334 1 2.5 1.5 3.834H230l-.167.166v-.166c-2.833.833-5.666 2-8.833 1-.5-.167-1.167.5-1.833.666-.334.167-.834.5-1 .334-1.334-1.334-2.834-2.667-4-4.167-1.167-1.667-2.167-2.667-3.667-.5-.167.166-.5.666-.5.666-3.333-2.166-6.333.167-9.5.334-.833 0-1.667-1.667-2.667-2.167-.666-.333-1.5 0-2.333 0 .333.667.5 1.167.833 1.834 0 .166.334 0 .334.166.5.667 1.166 1.334 1.5 2.167.166.166-.834 1.333-1.167 1.166-1-.166-2.5-.666-2.667-1.333-.833-2.833-1.833-5-5.166-2.833-.167.166-.667-.667-1.167-.834-.833-.5-1.667-1.166-2.667-1.333-.5-.166-1.166.5-1.833.667.333.333.667 1.166 1.167 1.166 2.166.167 1.833 1.5.666 2.167-1.333.667-3 .834-3.166 2.834-.5-.167-1.167-.167-1.334-.334-.666-.666-1-1.333-1.5-2 0 1.167 0 2.334-1.833 2.834-3.667 1.166-7.333 1.333-11.167.166-4.333-1.333-9.5-.5-13.833 1.667-1.167.5-2.667.5-3.833 1-1.667.833-3.167 2.5-4.834 2.666-1.666.167-3.333-1.666-5-1.5-1.166 0-2.166 2-3.333 3-.5.334-1 1.167-1.333 1.167-3.334-1.166-6.667-1.666-9.834.5-.333.167-1.166 0-1.333-.166-1.667-2.334-2.5-.167-3.333.666-1.334 1.334-2.334 3.333-4.667 1.334-.167-.167-1.167-.167-1.167.166-1.666 2.667-4.166 2.167-6.666 2.167-1.834 0-3.667 1.333-5.334 2.333-2.166 1.334-3.5 3.334-6.333 4.167-1.833.5-2.833 3.666-2.333 6.333.166.667 0 1.334 0 2-.5-.333-1-.5-1.5-.833-1.334-1-2.334-2-3.667 0-.167.166-1.5-.167-2.167-.667-1-.666-2-2.166-3-2.166-2-.167-4.166.166-6.333.5-1.833.333-3.667 1.5-5.5 1.666-5.333.334-9.833 2.334-13 6.667-1.5 2-2.167 1.666-3.667-.167S51 81.193 48 84.36c-1 1-4 .334-6 .167-1.833-.167-3.5-.667-5.333-1.167-4.167-1.166-8-1.166-11.5 1.667-.167.166-1 .166-1.167 0-2-2.667-5-2-7.167-1.334-5.333 1.667-10 .167-14.666-2-.834-.333-1.5-.666-2.167-.833v66.5h2400v-36.166c-.67 0-2.17.333-3.67.333zm-2204.83-61c-.167-.167-.333-.334-.333-.667 0 0 .166-.166.333-.166.167.166.333.166.667.333-.334.166-.5.333-.667.5zm13.833.333c-.833-.5-1.666-1-2.5-1.666l.667-.667 2.5 1.5c-.167.5-.5 1-.667.833zM232 50.193c-.5-.5-1-.834-1.5-1.334h-.167l.167-.166.167.166c.5-.166 1-.166 1.5-.333-.167.666-.167 1.166-.167 1.666zm3.333-5.667c-.166-.167-.333-.167-.5-.334l.334-.333.333.334c-.167.166-.167.333-.167.333zm6.167 4.166l-5-3c.667-.666 1.333-1.5 2-2.166 1.167 1.333 2.333 2.666 3.667 4.166-.334.334-.667 1-.667 1zm1.5-6.5c.5-.166 1.167-.666 1.667-.666 1.5.166 3 .5 4.5.666h.166l.167.167h-.333c-1.667.5-3.167 1-4.834 1.167-.333.166-.833-.834-1.333-1.334zm26 11.334h-.667c0-.167 0-.5.167-.834.167.167.333.167.5.334v.5zm30.333 13.666s.167 0 0 0l.334.167c-.167-.166-.167-.166-.334-.166zm13.167 6.334c-.5-.5-1-1-1.333-1.667.333-.166.666-.5 1.333-.833.333.666.667 1.333.833 1.833 0 .167-.833.667-.833.667zm6.833-4.334c-.166-.333-.333-.666-.333-1l.5-.333c.333.334.5.667.833.834l-1 .5zm1.5-4c0-.166-.166-.166-.166-.333 0-.166.166-.166.166-.166 0 .166.167.166.167.333l-.167.166zM341 64.36c-.167-.166-.167-.166-.167-.333s.167-.167.334-.333l.333.333c-.333.166-.333.166-.5.333zm2.167-11.166l.166-.334.167.334h-.333zm-.167-3c-.333-.167-1-.5-.833-.667.166-.5.333-1 .666-1.667l1 .5c-.333.834-.666 1.334-.833 1.834zm3 3.666c-.167-.166-.333-.5-.5-.666 0-.334.333-.5.333-.667.167.166.334.5.5.666 0 .334-.166.5-.333.667zm19.167-11.5l-.5-1c-.167 0-.167-.166-.334-.166l.167-.167c0 .166.167.166.167.333.333.167.5.5.833.667l-.333.333zM516.5 52.526c-.333-.334-.667-.834-1-1.167h.167c.166.334.5.667.833 1.167 0 0 .167 0 .167.166 0-.166-.167-.166-.167-.166zm28.667 11.833c-.167-.166-.334-.166-.334-.166.167-.167.334-.5.334-.667l.333.333c-.167.167-.167.333-.333.5zm75.5 21.5c0-.5.166-.833.166-1.333v-.334.334c0 .5.167.833.167 1.333 0 .167-.167.167-.333 0zm12-2l-.167-.166h.333l-.166.166zM650 83.526l.167-.334.166.334H650zm51-1.167c0-.166-.167-.333-.167-.333v-.333l.167.166v.5c0 .167 0 .167.167.334 0-.167-.167-.167-.167-.334zm1.167 2c-.5-.5-.667-1.166-1-1.666H701c.667 0 1.5 0 1.833.333.334.333.334 1.166.5 1.833-.166-.166-.833-.166-1.166-.5zm75.666 24c-.5-.5-1.166-.833-1.666-1.333l1.5-.5v-.167l.166.167h-.166c0 .667.166 1.333.166 1.833zm20.5 10c-.833-.166-2-.833-2.5-1.5-.5-1-1.5-2.5.667-3 0-.5-.167-1.166.167-1.666.333-.5.833-1 1.333-1.334.167.667.167 1.334.333 2h.167c.167.167.333.334.667.334-.167-.167-.5-.167-.667-.334-.5.334-1.167.667-1.667 1v.167c.667.667 1.167 1.5 2 2 .5.333 1 .5 1.667.833-1 .5-1.667 1.667-2.167 1.5zm6 9.667c-.333-.5-.666-1.167-1-1.833.167-.667.5-1 .667-1.5.333.833.833 1.5 1 2.333.167.333-.333.667-.667 1zm30.5-4c-.333 0-.666-.333-.833-.667.167-.333.333-.833.667-.833.166 0 .666.333 1.666 1-.666.167-1 .5-1.5.5zm379.337-75c0-.167-.17-.167-.17-.334 0-.166.17-.166.17-.166 0 .166.16.166.16.333.17 0 0 0-.16.167zm205-14.834c-.34 0-.5-.333-.67-.333.17-.166.5-.5.67-.666.16.166.33.333.66.666-.33 0-.5.334-.66.334zm131.66 1.834v-.5h-.16l-.17-.167h.33v.167s0-.167.17-.167v.167c.17 0 .33.166.5.166-.33.167-.5.334-.67.334zM1817 105.359c-.17-.166-.33-.166-.33-.333.16-.167.16-.167.33-.167s.17.167.33.167c-.33.167-.33.167-.33.333zm154.83 20.334v.333h-.33s.17-.167.33-.333c.17 0 0-.167 0 0zm191 11c.17-.5.5-1 .84-1.5l-.17-.167.17.167c.5.5.83 1.166 1.33 1.666-.67-.166-1.5-.166-2.17-.166zm37.5-1.5c-1.16.5-2.33 1-3.5 1.333-.16 0-.33.167-.33.167h-.17c-1-.167-2.16-.334-3.16-.334 0-.166 0-.333.16-.666 1 .333 1.84.5 2.84.833.16 0 .16.167.33.167s.33-.167.5-.167c1.17-.667 2.33-1.5 3.67-2.167-.34.334-.17.667-.34.834z" />
  </StyledSvg>
)
