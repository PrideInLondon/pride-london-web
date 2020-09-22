import React from 'react'
import { StyledSvg } from './RipVariant.styles'
import { RipVariantProps } from './RipVariant.types'

export const RipVariant1: React.FC<RipVariantProps> = ({ color, ...props }) => (
  <StyledSvg xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill={color}
      d="M2395.5 17.693c-1.33-2.5-2.33-4.167-5.17-4.667-4-.833-8.16-1.166-12-3.166-3.83-2-8-3.834-12.33-4.167-3-.167-5 .5-5-3.333 0-.5-.67-.834-1-1.167-.33.333-1 .667-1.17 1.167-.66 1.833-2.5 4.666-3.5 5.333.34-1.5.67-3.167.67-4.667 0-.833-.33-2.166-.83-2.333-1-.333-2.17 0-3.34 0 0 1 .17 1.833.17 2.833 0 .5.17 1 .17 1.5-7.34.5-14.67 1.167-22 1.5-1.84 0-4.67 3.334-5.5-1.333-2.5.667-5 1.333-7.67 1.667-2.33.333-4.83-.167-7.17.166-3.66.5-7.33 1.5-11 2-.83.167-1.83-.833-2.83-1.166-1.17-.334-2.5-.667-3.67-.5-3.83.333-8 2.5-11.33-.334-1.5-1.333-2-2.666-4.17-1.166-.5.333-1.66-.334-2.5-.5-2.33-.667-4.5-1.334-6.83-2-1.17-.334-4.83 1.666-2.83-2.5-.84-.334-1.84-1-2.5-.834-3.5 1-6.84 2.334-10.34 3.167h-.5c-.66.5-1.5 1-1.83.833-1.83-.833-3.83-1.333-5.67-1.333-.33.167-.66.5-.83.333-.17-.166-.33-.166-.67-.333-2.83.167-5.66 1-8.5 2-1.16.333-2.83 0-4-.333-2.5-1-4.83-3.334-7.16-3.334-3.17 0-7.17-1.5-9.67 2.5-.17.334-1.33.167-2.17.167-4.5 0-8.83.167-13.16.167-4 .166-8 1.5-12-1.334-1.5-1-4.84.667-7.17 1.167-1 .5-2 1.167-3.17 1.667-1.16-4.334-2.66-.334-4-.167-2.83.333-5.66 1.333-8.33 1.5-5.17.333-10.5-.667-15.33.5-5.84 1.167-11.5 2.833-17.34 3.5-1.16.167-2.5 1.167-3.5 2-.33.333-.33 1.167-.33 1.667-.17-.5-.33-1.167-.67-1.667-3.33-7-3.33-7.167-8.33-5-.83.333-1.33.833-2.17 1.333.67.5 1.34.834 2 1.334.34.166.84.333 1.17.666-.33.167-.67.667-.83.667-2-.333-4.17-1-6.17-1.5-2.33-.667-4.67-1.5-7-1.667-2.17-.166-4.67-.333-6.33.834-2.34 1.5-3.84 1-5.5-.5-1.17-1-2.34-2-3.67-2.5-1.17-.5-2.5-.334-3.83-.334.33 1.167.5 2.334.83 3.334v-.167c-.83-.833-1.5-1.833-2.5-2.333-2.17-1.5-4.17-3.5-6.5-4-6.17-1.5-12.5 13-18.67 11.666-3.83-.833-7.66-3.5-10.33 1.834-.17.333-1.17.166-1.67.333-2.5 1.5-4-.833-6-1.333-4.16-1.167-8.33-1.5-12.5-2.334-3.33-.666-6.5-1.666-9.66-2.5-2.84-.666-5.5-1.333-8.34-2-2.33-.5-4.5-1.166-6.83-1.666-.83-.167-2.33-.334-2.5-.834-1.33-4.166-5.17-2.5-7.83-3.333-1.5-.333-3.34 0-4.34-.833-3.83-3-7.33 0-9 1.666-3 2.834-5.66 3.5-9.33 3.334-2.83-.167-4.83.666-4.83 3.833-4.17-1-7.5 1-10.84 2.667-1.16-1-2.33-2-3.33-2.834-.17-.166-.33-.333-.5-.5v1c-2.83.5-5.83 1-8.67 1.5-.16-.166-.16-.333-.33-.666 0 .166.17.5.17.666-1.84 1-4.17 3.334-5.67 3-8.17-2.333-15-10.666-22.83-12.333-.34 0-1 .5-1.34 1-1.83 3-4.16 2.167-6.83 1.333-1.33-.333-3-.166-4.33.167-3.34 1-6.5 2.5-10 3.333-.5.167-2.67-1.666-2.34.167.5 4-1.16 3.833-4 3.333-.33 0-1 .334-1.16.5-1.67 4.5-4.84 2.334-7.34 1.334-3-1.167-5.16-14.667-6.83-11.5-.33-.834-.67-1.834-.83-2.667l-7.5 1.5s.16 1.333.33 2.167c-4.67.5-9.67 4.333-13.83-1.5-.17-.334-.84-.5-1.17-.5-3.83 1.333-7.83 2.166-11.17 4.166-4.83 3-9.5 5.5-15 6.667-1.33.333-2.83 1.667-3.66 2.833-2.5 4.667-7.84-6.5-11.34-4.166-.66.333-1.83.333-2 .833-.33.667.17 1.667.34 2.333.16.5.66 1 1 1.5-.67 0-1.5 0-2.17-.166-2.5-.334-4.83-13.834-7.17-14.167-1.83-1.167-7.5.167-8.5 1.333-.66.834-2.5 1.834-3.16 1.5-3.84-1.833-7-1.166-10.5 1-1 .667-3.67 2.667-4.17-1.166-1.67.5-2.83 2.166-5.5 1-2.33-1.167-6-.667-8.67.333-4.33 1.667-9.16 1.333-12 4.667-3.83 4.333-7.16 8-13.5 6.166-.33 0-.83.5-1.16.667-7.34 5.5-16-5.667-24.17-6-8-.333-15.83-1.5-22.5 4.5-1.5 1.167-3.83 1.667-5.83 2-2.17.333-4.34 0-6.5 0-5.17 0-10.5.5-15.67-.333-5.5-.834-10.83-2.167-16.17.5-2 1-4.5 1.333-6.66 2-5.67 1.5-11.34 2.5-16.67 4.5-3 1.166-5.33 1.5-8-.167-3.67-2.333-4.5-.667-3.83 2.833-1.84-1.5-3.67-3-5.5-4.5h-3.5c.33 1 .5 1.834.83 2.667-4.83.167-9.83-.5-14.33 2.667-2.34 1.666-6 1.666-9 2.166-1 .167-2.34-1-3.34-.833-3.66.167-7.5.833-11.16.833-3.34 0-6.84-1-10.17-.666-3.33.333-6.17.333-7.83-3-.34-.667-1.84-1-2.67-.834-3.33 1-5.5-.666-7.33-3-1.84-2.333-4-4.166-7.34-3.166-1.16.333-2.66.333-3.5-.334-1.83-1.5-2.16-.666-2.5 1-.16.667-.33 2-.5 2-5-.333-7.33 4.334-11 6-4.83 2-10.5 2.5-15.5 4.334-5.16 2-10.16 2.833-15.5 1.166-1.16-.333-2.83 1-4.16 1.167-3.17.667-6.17 1.167-9.34 1.833-.83.167-1.5.334-2.33.667-2.83.333-6.5-.333-8.67 1.333-4 3.167-6.16.167-9.33-1.166-3.67-1.667-7.33-4-11.33.333-.84.833-3.67.333-5.5 0-1.5-.333-3.17-.833-4.5-1.5-4.67-2.5-10-2.333-14.67-4.167-4-1.666-7-1-10.5.167-1.33.5-2.83 1.333-4.17 1.167-3.33-.334-5.66 5.5-9.5 1.5 0 0-.33 0-.33.166-1.5 3.667-4.17.834-6.33 1.167-2.5.333-4.84.5-7.17 1.333-2 .834-3.83 2.834-5.83 3.334-6.84 1.333-13.5 4.166-20.67 9.333-.17.167-.83-.167-1.17-.167-2.16-.333-4.5-.833-6.66-.666-7.67.5-15.17 1.166-22.84 2.166-2.66.334-5.5 1.167-7.66 2.834-2 1.5-3.34 2.333-5.84.833-1.16-.667-4.66-2.5-5 1.167-.16 2.5-.83 1.5-1.66.833-3.34-2.333-6.84-2.333-10.67-1.5-1.67.333-3.5 0-5.33-.167h-.17c-.17 1-.17 2-.33 2.834-.5-1-1-1.834-1.5-2.834-.84-.166-1.84 0-2.17-.333-4.83-6-9.67 3.833-14.5.167 0 0-.83.833-1.33 1.166-1.34.667-2.5 1.5-4 2-4.67 1.334-9.5 2.667-14.17 3.834-.83.166-2.83-.334-2.83-.667-.34-3.833-1.84-3-4-1.333-.84.666-2.17.333-3.34.666-1.66.334-3.33.667-4.83 1.167-1 .333-1.83 1-2.83 1.167-4.34.5-8.84-2.167-12.84.833-.16.167-.66 0-.83 0-5.33-1.5-10.5-3-15.83-4.333-1.34-.334-3 .333-4.5.5-1-.667-2-1.334-2.84-2-3.16-2.834-6.5-5-11-4.334-2.33.334-4.66.5-7.16.5-5 0-10 4.334-15 5-7.67 1-15.17-2-22.84-.5-3 .5-7 1.834-9.16.5-5.67-3.166-11.34-4-17.67-3-1.17.167-2.5 0-3.67-.166-5.66-.834-11.33-1.5-17-2.334-2.83 2.834-5-2.833-7.16-3.666-6.17-2.5-12.34-12-19.34-10.834-2.83.5-5.5.834-8.33 1.334-2.33.5-4.5 1.166-6.67 2.166-2 .834-3.83 3.334-5.33-.5-.17-.333-1.5 0-2.17-.166-1.66 0-3.33 0-5.16-.167-2.67-.333-5.5-.833-8.17-.833-2.33 0-4.67.5-7 .333a274.008 274.008 0 01-16.833-1.5c-6-.833-12.334-.5-16.834-6-.5-.667-2.333-.167-3.5-.333-3.666-.334-7.5-.667-11.166-1-.667-.667-1.334-1.167-2-1.834.5.834.833 1.667 1.333 2.334-1.5 3.166-3.5 3.166-6.167 1.166-.833-.5-2.166-.833-3.166-.666-3.5 1-7 3.666-10.167 3.333-3.333-.5-8.333 1.333-10.5-3.667-.167-.666-1.833-.666-2.833-.833-.167 0-.667.833-.5 1.333.166.834.666 1.5 1 2.334-.834-.334-1.5-1.167-2.167-1.167-1.333-.333-2.833-.167-4.333-.333-.5.333-1 .833-1.5 1.333l-.5-1c.666-.167 1.333-.167 2-.333-3.667-5.334-7.667-6.167-13-3.167-.834.5-3.334-.333-4-1.333-1.334-2-2.334-3-4.667-1.5-.833.5-2 .5-3 .5-4.167.166-8.333-.5-12.333.5-8 2-14.334.833-19.167-6.5-.333-.667-1.5-1-2.167-1-3 .166-6 8.333-9 8.666-3.166.334-6 .667-8.166-2.333-.5-.667-2.167-1.167-2.334-1-2.166 2.833-4.333 1-6.833.667-1.5-.167-3.167 1-4.667 1.5-1-2.167-1.833-5.5-4.5-1-.333.5-2 .333-3.166.333-1.334-.167-2.5-.833-3.834-1.167-3.333-.833-6.666-1.833-10-2.666-.833-.167-2.333 0-2.5.5-.666 1.5-.5 1.666-2 .666-4.333-3.666-9-6.333-15.166-5.333-1.667.333-3.667-1.167-5.334-1.833-1.333-.5-2.666-1.167-4-1.667-3-1-6-1.833-9-2.667-1.5-.333-3.333-1-4.666-.666-2.667.833-3.5-.5-4-2.667-10.834 1.333-21.5 14.5-32.334 15.833-.833 0-1.666-.666-2.5-1-6.833-2.833-12.833.834-13 7.5 0 .334-1 .834-1.333.834-4.5-.334-6.833-5.167-11.833-5.334-2.167 0-3-1.166-3.334 1.5-.333 2.834-2 3.834-4.666 3.834-2.167 0-4.334.666-6.334.166-2.833-.666-5.5-2.666-8.666-.666-1.5 1-3.334 1.666-5 2.333.833 1.333 1.833 2.667 2.666 4 .167.333.5.667.667 1.167-1.667 0-3.5.333-5.333 0-.834-.167-1.5-1.5-2.167-2.334.167 1.167.167 2.5.5 3.834.333 1.166.667 2.5 1 3.666-3.333.5-2.833-2-3.333-4-.334-1-1-2-1.5-3-.667.834-1.667 1.5-2.167 2.5-2.167 4.167-4.833 7-10.167 6.167-2.666-.333-5.5-.333-8.166.167-4.667.666-9.167 1.833-13.834 2.666H627c-4.5-3.166-7.833-3.333-9.5.167-1.5 3.167-3 2.667-5 .833-1.167.5-2.833.667-3.667 1.5-1.666 1.834-2.833 4-4.833.334 0 0-1.167.333-1.333.666-3 6.334-7.334 11-14.5 12.667-3.334.833-6.167 2.833-9.334 4.167-2.5 1-5.333 2-8 1.833-5.166-.333-10.666-8.667-15.166-3-.334.333-1.167.5-1.667.167-2.333-1.5-2.667-.334-3 1.666-.167.667-1.667 1.167-2.667 1.667-1.333.5-2.833.667-4 1.333-3.166 1.834-6.166 3.667-9.166 5.5-.834-.666-2-2-2.667-1.833-1.667.333-3.167 1.5-4.833 2.333-3.334 1.5-6.167 4-10.334 2.5-5.666-1.833-11.5-3-17.166-4.5-.5-.166-1.334-.333-1.667 0-4.333 3.834-8.5.667-12.333-.666-3.334-1-5.667-.667-8.667 1.166-4.667 2.667-9.667 8.5-15.833 2-.334-.333-1.5.167-2.167 0-3.167-.833-6.667 2.667-9.5-1.166-.167-.167-1.167 0-1.167.333-2.333 4.333-3.833.333-4.666-.833-2.334-3.334-4.334-2.667-6.667-.334-1 1-1.833 2.167-2.833 2.834-.667.5-2 1-2.667.833-5.167-2.167-10-4.333-14.5 1.167-.5.5-1.667.666-2.5.833-3.833.833-8.833-1.5-10.5 4.5-.167.333-1.333.667-2 .667-3.333-.167-6.5-.5-9.833-.334-3 .167-6.167.167-8.834 1.334-5.666 2.666-11.333 5.5-16.333 9.166-7.167 5.5-15.833 6.667-23.833 9.5-.667.167-1.667-.333-2.5-.333-3.167-.667-6.167-6.333-9.167-4.167-2.5 1.834-5.333 3-8.167 4.334-3.166 1.5-6.5 3.5-9.833 4.333-4 1-9.167 2.5-12 .833-3.333-2.166-4.333-1.666-6.167.834-3.166 1-6.5 1.5-9.166 3-5.834 3.166-12.167 4.5-18.167 2.666-3.333-1-5.833 0-8.667 0-2.5 0-5 .5-7.5.5-3.166 0-6.666-1.166-9.333 0-4.667 2.167-9-.166-13.5 0-2.667 0-3.667.834-3.667 3.167 0 3.833-1.166 4.5-4.5 2.333-1.666-1.166-3.833-2.166-4.333 1.667-.333 2.833-9.5 5.333-11.667 3.5-.5-.333-.5-1.5-.5-2.333-.166-2.167-.5-4-3-1.834-1.833 1.5-3.333 3.167-5 4.667-3.166 2.833-6.333 5.667-9.666-.167-.167-.333-1.5 0-2-.333-4.334-1.667-8.667-2.167-13.334-1-4 1-8.666 0-12.5 1.333-4.166 1.5-7.166.167-11-.666-7.166-1.834-14.5-2.834-21.833-3.334-3.667-.166-7.5 2.167-11.167 2-4.333-.166-7.666 1.334-11.333 3-3.667 1.834-8 2.667-12 3.667-3.167.833-6.333 1-9.5 1.667-5.667 1-11.333 3-16.333-1.667-.667-.5-1.834-.333-2.834-.5 0 .833 0 1.833-.166 2.667-.334.833-.834 1.666-1.667 2-1 .666-2.333.833-3.5 1.333-1-.167-2.333-1-2.833-.667-4.667 3.5-9.5 1.834-14.334 1-4-.666-8.166-2.166-11.833-1.666-3.167.5-5.333-.167-8-1.167-4.667-1.667-9.167-4.167-14-4.667-3.5-.5-4.667-2-5-4.166-.5-.334-1.167-.667-2-1.167v24h2400V22.86c-1.17-1.5-3.33-3-4.5-5.167zM64.833 144.86c-1.166.5-2.333 1-3.5 1.333-.166 0-.333.167-.333.167h-.167c-1-.167-2.166-.334-3.166-.334 0-.166 0-.333.166-.666 1 .333 1.834.5 2.834.833.166 0 .166.167.333.167s.333-.167.5-.167c1.167-.667 2.333-1.5 3.667-2.167-.334.334-.167.834-.334.834zm539.334-84.5l.166-.167v.333l-.166-.166zm23.833-9h1.833H628zm42.667-5.5c-.5.333-1.167.666-1.667.833.5-.333 1-.667 1.667-.833.833-.334 1.666-.834 2.5-1.167v.833c-.834.167-1.667.167-2.5.334zm44.166-11.334l-.166-.166H715l-.167.166zm197.834-.833l-.5-.5s.166-.167.166-.333c.167.166.334.333.5.333-.166.333-.166.333-.166.5zm689.503-4.667c-.17-.333-.34-.833-.34-1.333.34.333.67.667.84 1-.17 0-.34.167-.5.333zm679.66-17.333c-.16-.167-.5-.333-.66-.5.16-.167.5-.167.66-.333.17.166.34.333.5.5-.16 0-.5.333-.5.333zm73.5-4.167h-1.16c0-.166.16-.333.16-.666.34.166.67.333 1 .666 0-.166 0-.166 0 0zm7.84-.166v-.167h.33v.167h-.33zm5 4.833c-.84-.5-1.34-1.333-2.34-2.333 1.34-.334 2.5-.834 2.84-.667.66.5.83 1.667 1.16 2.5-.66.167-1.5.667-1.66.5zm5 .167c-.17.166-.67.333-1 .5 0-.167-.17-.5-.17-.834.33 0 .67-.166 1-.333 0 .167.17.667.17.667zm-.34-2.667c-.33 0-.5-.333-.66-.5.33-.167.5-.167.83-.333.17.166.5.333.67.5-.34.166-.67.333-.84.333zm15 5.833v-.333c.17 0 .17-.167.34-.167.16 0 .16.167.16.334-.16 0-.33.166-.5.166zm9.5 7.334c-.16 0-.5-.167-.66-.334.16-.166.33-.5.5-.666.16 0 .5.166.66.333-.16.167-.33.667-.5.667z"
    />
  </StyledSvg>
)
