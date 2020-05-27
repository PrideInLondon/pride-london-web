import React from 'react'
import { StyledSvg } from '../TornBackground.styles'

interface Rip4Props {
  color: string
  variant: string
}

const Rip4: React.FC<Rip4Props> = ({ color, ...props }) => {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      {...props}
    >
      <path
        fill={color}
        d="M2396.67 52.88c-.34-.333-.84-.666-1.17-.5-1.5.334-2.83.834-4.17 1.334.34 1 .84 2 1.17 3l1.5 3c-1.67.5-3.33 1.334-5 1.334-2.83 0-5.83-.834-8.67-.334-1.83.334-3 2.834-4.66 4-1.17 1-3 2.667-3.17-.833 0-.334-.5-.667-.67-.667-.16 0-.66.334-.66.5.33 2.667-1.67 3.667-3.5 4.667-.5.333-.84.833-1 1.333-.34 1.834-1 2.334-2.84 1.334-.33-.167-1.33 1-2 1.666.5 1 1.17 2 1.34 3.167.16.333-.5 1-.84 1.5-2.5-2.5-2.5 1.333-4.16 1.666-1.67.334-3.17 1.667-4.84 2.5-2.66 1.334-3.5.167-5.83-2.333-2.5-2.833-4.17-7-8.67-7.666-.5 0-.83-1-1-1.667-.33-.834-.33-2.167-1-2.334-3.16-1.666-6.5-3.666-9.83-4.666-3-.834-6.5-.334-9.33-1.167-1.5-.5-4.17 1.5-4.84-1.5-.83.667-3.33-.166-2.16 2.334.16.333-.5 1.333-.67 1.333a84.1 84.1 0 01-9.33-1c-1.5-.167-3.5-1.667-4.5-1.334-2 1-3.84 2.667-4.84 4.5-1 2-2.5 1.667-3.66 1.5-3.34-.666-4.67 1-5.34 4-.83 3.667-1.33 3.834-4.5 2.834-2.16-.834-4.33-1.334-6 1-.16.333-1 .666-1 .666-2.33-2.833-3.33.167-4.83 1-.17.167-.5.334-.67.5-2.33-4-4.66-.333-6.33.5-1.83 1-2.17 1.667-2-.833 0-.333-.33-.833-.5-1.166-.5.333-1.17.666-1.17 1-.33 1.666-.5 3.166-.83 4.833 0 .333-.5.666-.67 1-.16-.334-.33-.667-.5-1.167-.33-.833-.66-1.833-1-2.666-.83 1-2 1.833-2.33 2.833-1.5 3.833-2 4.166-5.83 2.166-5-2.666-10.34-1.666-14 2.834-.67.833-1.67 1.333-2.67 2-3.67 2.166-7.17 4.666-11.17 6.333-2.5 1-5 1.334-5.16 4.834-.34-.167-.67-.167-1-.334-.84-.666-2.34-2-2.34-1.833-1.33 1.333-4-.167-4.83 2.167-1 2.166-4.33 2-4.67 4.833-.66-.333-1.66-1-2-.833-.66.333-.83 1.333-1.33 2.166-.67-.666-1.5-1.333-2-2.166-2.5-4.5-3.83-9.834-8-13.5-.33-.334-.67-.834-1-1.167 1.67 2.166-3.17.833-1.67 3.166.5.834.34 2.167.17 3.167 0 .5-.83.834-1.17 1.167-.33-.5-.66-1-.83-1.5-.5-1.667-1.83-1.667-2.67-.667-1 1.167-1.5 2.834-3.33 1-.17-.166-1.17.334-1.5.834-.83 1.5-1.5 1.166-2.67.166-1-.666-3.5-1.166-3.83-.666-1.33 1.833-2 1.166-3.5.333-2-1.167-2.17-1.834-.5-3.167.17-.166 0-.666-.17-.833-.33-.167-1-.167-1.16 0-.5.666-1 1.5-1.34 2.333-.33.667-.5 1.5-.83 2.334-.5-.834-1-1.667-1.5-2.667-1.17-.167-2.5.166-2.17-2.167.34-2.333.67-5.333-.5-7-1.33-2.166-4.16-4-6.66-4.5-1.84-.333-4.34 1.5-4 4.5 0 .5-.84 1-1.17 1.667 0-.667-.17-1.334-.17-2-.16-.834-.16-1.667-.33-2.334-.33.5-.83 1-1 1.667-.17 1.334-.83 1.667-1.67.667-.83-1.167-1.33-2.5-2-4-.16-.667.17-1.667-.16-2.167-.84-1-2.17-2.5-2.84-2.333-1.33.333-2.66 1.5-1.5 3.5.34.5-.16 1.5-.33 2.166-.33-.5-1.17-1-1.17-1.666-.16-1.834-1.16-2.334-2.66-2.167v.167l-.17-.167h.17c.16-1.666.33-3.5.5-5.166 0-.334-.34-.667-.5-1.167-.34.166-1 .333-1 .666-.67 1.334-1.17 2.834-1.67 4.334-1-1-2-2.667-3.17-3.167-1.16-.5-3.5-.333-4.16.5-1.5 1.5-2.17 3-3.17-.166-2.67.666-4.5-4.667-7.83-1.334-.5.5-3-.166-4-.833-5.34-4-11.34-5.5-17.67-6.5-1.33-.167-2.67-.5-4-.834-2.17-.833-4.67-1.5-6.5-2.833-3.67-2.666-7.83-3.5-12.17-4.166-1.66-.167-3.33-.5-1.66-2.667.16-.167-1.17-1.334-1.67-2-.33.5-.5 1-.83 1.5-.17.333-.17.833-.17 1.166-.5-.166-1.17-.166-1.17-.333-.83-4.666-3.66-1.833-5.83-1.666l.17.166c-.84-.5-1.84-1.666-2.5-1.5-4.34 1.334-7.5-.333-10.34-3.5-3.33-3.666-8-4-12.33-3.5-2.83.334-5.5-.5-8.33 0-1 .167-2.34.167-3.34.167-.83-.167-1.83-.5-2.16-1-.67-1-.5-3.5-2.17-2.5-1.5 1-5-.167-4.33 3.833.33 1.667-.34.834-1.17 0-1.17-1.166-3.33 1.5-4.67-.833-.16.333-.5.666-.5 1 .17.666.67 1.333.84 2.166.16 1 0 2-.17 3-.83-.333-1.67-.666-2.33-1.166l-1.5-1c-.34-.167-1.17 0-1.17.166-.17.334-.17 1 0 1.5.5.834 1.17 1.334 1.67 2.167.5.834.66 1.667 1 2.5-.84-.5-1.84-.833-2.5-1.333-.67-.5-1-1.167-1.5-1.667-1.34-2-1.17-1.333-3.67-1-4 .5-7 4.834-11.5 2.5-.17-.166-1.33 1-1.83 1.667-.34.5-.67 1.166-.84 1.833-.33-.666-.66-1.5-.66-2.166 0-1.5.16-3 0-4.334 0-.5-.34-3.333-1.34-.166-.33.833-2.16 1.166-3.16 1.666.83 1 2 2 2.5 3.167.66 1.833-.67 1.5-1.84 1.333v.167c-2-1.334-5-1.834-3.16-5.5.16-.334-1-1.834-1.67-2-1.33-.334-1.83.5-1.67 2 .17.833-.33 1.833-.33 2.666 0 1 .33 2 .5 2.834-1.17-.5-2.17-1.334-3.33-1.667-1.17-.333-2.17-3.333-3.67-.333-1.17-.834-2.33-1.667-3.5-2.5-.67-.5-1.5-.834-1.67-1.5-.33-1.5.34-2.834-2.33-2.834-1.5 0-2.83-1.166-2.83 1.334 0 .166-1.17.5-1.67.333-.5-.166-1-1-1-1.166 1.67-4.5-2.17-3.5-4.17-4.334-1-.5-2.83-.666-3-1.5-1.5-4.166-4-2.5-6-1.166-2.5 1.666-4.5-.334-6.16-1-4.67-1.667-9-3-14-2.5-3.84.5-7.84-.167-11.84-.5-.66 0-1.83-.334-2-.834-.66-2.666-2.83-3.333-5-4.166-1-.334-2.33.166-3-.334-1-.833-1.66-2.166-2.33-3.333-.17-.167-.5-.167-.83-.167-4.67.334-4.67.334-8.84-2.166-.33-.167-1.16-.334-1.5-.167-1.66 1.166-2.16-.167-2.83-1.167-.67-.833-1-1.833-1.67-2.666-3-3.167-4.16-3-6 1.166h-.16c-1-.333-2.5-.166-3-.833-3.67-4.5-8.34-5.667-13.84-5.5-1.83 0-3.66 0-5.5-.167-4-.5-8-.5-12 .834-2.83.833-6.16-.167-9.33-.5-2.17-.167-4.5-.834-6.67-1-1.33-.167-2.66.5-3.83.666-.67 0-1.33-.166-2-.333-.33-.167-.5-.5-.83-.834-1.67 2-4.5-2-6.17 1-.17.167-1.67.167-2-.333-3.67-4.5-8.83-3.166-13-2-4.5 1.333-7.17-1.333-10-3-2-1.167-3.67-2.833-6.17-3-1.5 0-3.5-.333-4.33-1.166-2.83-3.5-6.83-2.667-10.33-3.334-1.84-.333-4-1-5 1.834 0 .166-.17.333-.34.333-1.33 0-2.66-.333-3.83 0s-2 1.833-3.17 2c-2.33.5-5.66-.333-7.16 1-2.17 2-4.84 1-6.84 2.5-1.66 1.333-3.5 2-5.83.666-.83-.5-2.5 0-3.83.334-2 .5-3.84 1.166-5.84 1.666l.17-.166c-2.67 1.666-5.17 3.333-7.67-.334-.5-.666-2.66-.666-3.83-.333-2.17.5-4 2.333-6.5 1.333-.33-.166-1.17.5-1.33 1-1.34 2.834-2.34 2.5-3.67 0 0-.166-1.5.167-2 .667-1 .834-1.67 2-2.5 3 .83.167 1.67.5 2.5.334 1.5-.167 2 .166 1.67 1.666-.17.667-.17 1.167-.34 1.834-.33 1.166-.66 2.333-.83 3.5-1-.667-2-1.167-2.83-1.834-1.34-1.166-2.67-3-3.5.334-.17.5-1.5.833-2 1.333-.5.333-.67 1-1 1.666.66.167 2 .667 2.16.5 3.34-4.166 3.67-1.333 4.17 1.667.17.5 1 1 1 1.5-.17.834-.67 1.834-1.33 2-2 .667-3.67-2.333-6-.833-.17-.834-.34-1.667-.67-2.5-.33-.667-.83-1.167-1.33-1.667-.5.667-1.5 1.5-1.5 2 .66 2.5-.67 2.334-2.5 2.334-3.67.166-7.17.666-10.5-1.5-.34-.167-1 .166-1.5.333 1.5 3-2.34 4.833-1.67 7.833.5 2-1 2.667-2.83 1.667-.67-.334-1.17-1.167-1.67-1.334-.33-.166-1.17.5-1.5 1-.33.667-.33 1.5-.5 2.167-.5-.666-1-1.333-1.67-2-1.33-1.666-2.5-3.5-4-5-.16-.166-2 .834-2.5 1.667-1.5 2.166-1.16 2-3.16.5-2.5-1.834-5.34-3.334-8-5-1.34-.834-2.84-1.5-4.17-2.5-.67-.5-1.5-1.667-2-1.5-4.33 1.5-2.17-1.834-2-2.834.17-1.166 1.5-2-.5-2.833-1.17-.5-1.67-1.666-3.67-.666-2.33 1.333-5.83.833-8.83 1-1.17 0-2.5-.834-2 1.5 0 0-1 .5-1.17.333-.83-1-1.33-2-2-3-.33-.334-.66-1.167-1-1.167-4 0-4 0-6.16-1.333-.34-.167-1.17 0-1.34.166-1.5 2-3.5 2.834-5.83 2.167-.83-.166.83-2.666 4.33-4 2.67-1 1.34-1.666.5-2.833l.17.166c.5-.666 1-1.166 1.5-1.833-5.5-.333-11-2.5-16.5.167-.67.333-2.67-.667-2.67-.5-.83 1.833-2 3.166-4 3.666.17.334.5.834.67 1.167.5 1.334 1 2.5 1.5 3.834h.17l-.17.166v-.166c-2.83.833-5.67 2-8.83 1-.5-.167-1.17.5-1.84.666-.33.167-.83.5-1 .334-1.33-1.334-2.83-2.667-4-4.167-1.16-1.667-2.16-2.667-3.66-.5-.17.166-.5.666-.5.666-3.34-2.166-6.34.334-9.5.334-.84 0-1.67-1.667-2.67-2.167-.67-.333-1.5 0-2.33 0 .33.667.5 1.167.83 1.834 0 .166.33 0 .33.166.5.667 1.17 1.334 1.5 2.167.17.166-.83 1.333-1.16 1.166-1-.166-2.5-.666-2.67-1.333-.83-2.833-1.83-4.833-5.17-2.833-.16.166-.66-.667-1.16-.834-.84-.5-1.67-1.166-2.67-1.333-.5-.166-1.17.5-1.83.667.33.333.66 1.166 1.16 1.166 2.17.167 1.84 1.5.67 2.167-1.33.667-3 .834-3.17 2.834-.5-.167-1.16-.167-1.33-.334-.67-.666-1-1.333-1.67-2 0 1.167 0 2.334-1.83 2.834-3.67 1.333-7.33 1.333-11.17.166-4.33-1.333-9.5-.5-13.83 1.667-1.17.5-2.67.5-3.83 1-1.67.833-3.17 2.5-4.84 2.666-1.66.167-3.33-1.666-5-1.5-1.16.167-2.16 2-3.33 3-.5.334-1 1.167-1.33 1.167-3.34-1.166-6.67-1.666-9.84.5-.33.167-1.16 0-1.33-.166-1.67-2.334-2.5-.167-3.33.666-1.34 1.334-2.34 3.334-4.67 1.334-.17-.167-1.17-.167-1.17.166-1.66 2.667-4 2.167-6.66 2.167-1.5 0-3.17 1-4.5 1.833-.34 3-1.67 4.834-4.84 3.5-.66.5-1.33.834-2.33 1.167-1.83.666-2.83 3.666-2.33 6.333.16.667 0 1.334 0 2-.5-.333-1-.5-1.5-.833-1.34-1-2.5-2-3.67 0-.17.166-1.5-.167-2.17-.667-1-.666-2-2.166-3-2.166-2-.167-4.16.166-6.33.5-1.83.333-3.67 1.5-5.5 1.666-5.33.334-9.67 2.334-13 6.667-1.5 2-2.17 1.666-3.67-.167s-3.33-4.166-6.33-1c-1 1-4 .334-6 .167-1.83-.167-3.5-.667-5.33-1.167-4.17-1.166-8-1.166-11.5 1.667-.17.166-1 .166-1.17 0-2-2.667-5-2-7.17-1.334-5.33 1.667-10 .167-14.66-1.833-1.5-.666-3-1-4.34-1-.16.167-.16.5-.33.667-3.17 2.666-6.5 5-10 7.333-7 4.667-15.5 5.334-23.33 7.167-2.67.666-3.67 1-5.34 3-1.66 2-4.83 2.833-7.5 3.666-3.33 1-7.16-1.5-10.5 1.334-.33.166-1.33-.334-2-.834-2.66-2-6.16-1.5-8.33 1.167-.83 1.167-1 2.667-3.67 2.167-1.5-.334-3.66 3-5.66 4.666-.5.334-1.5.167-2.34.167.34-.333.67-.666.84-1-5.17 2.5-10.34 5.167-15.5 7.667-1 .5-2 1.166-3 1.333-5 .667-10 .834-15 1.834-2.67.5-5 2-5.17-2.334 0-1.333-6.67-1.5-7.67-.333-.33.5-.66 1-1 1.5-3.5-4-9.66-.667-13.16-4.667-.5-.5-1.67-1.166-2-.833-6 4.333-11-2.5-16.84-1.5-.83.166-2.16 0-2.33.333-2 3.834-5.17 2.167-8.17 1.834-1.16-.167-2.33.166-3.5 0-1.16-.167-2.33-1-3.33-1-5 .166-6.67-7-12-5.667-.33.166-1.33-.334-1.33-.667-.5-4.166-2.67-3.166-5.5-2-1.34.5-3.17-.333-4.67-.666-1.67-.167-3.5.166-4.67-.667-2-1.334-5.16 2.833-6.16-1.667-.67.5-1.34 1.167-2.17 1.5-2.17.667-4.5 2-6.5 1.667-5.17-1-10.33-4-15.5-4.167-4.67-.166-9.5 2.5-14.33 4-4.34 1.334-8.67 2.5-13 3.5-.84.167-2.67-.833-2.84-1.666-.66-3.334-2.83-2.167-4.83-2.167-4.67.333-9.33 2.333-14.17.833-1.5-.5-3.66.834-5.33 1.667-2.67 1.166-5.17 2.666-8 3.666-1.5.5-3.33 0-5 .334-2.83.5-5.83.833-8.33 2-1.34.666-1.84 3.166-3.34 4-1.66 1.166-4.16 1.333-3 4.333 0 .167-.66.667-1 .667-.33 0-.83-.5-.83-.834 0-2-1.5-4.5 1.83-5.5.5-.166 1-1 1.34-1.666-.67-.167-1.17-.5-1.84-.667-1-.333-2.33-.333-3-.833-3.33-3.167-3.33.166-4.33 2-2.83-1.334-5.83-2.167-8.5-3.834-3.67-2.333-6.83-3.166-11.33-2.166-2.84.666-6.34-1.334-9.337-2.667-5.333-2.166-10.5-5.166-15.833-6.666-2.833-.834-6.333-2.334-9.667.666-1 .834-4.333-1-6.666-1.166-1.5-.167-3 .5-4.667.666-1.833 0-3.667-.166-5.5-.5-1.5-.166-3.167-.666-4.667-.833-7.5-.167-15-.334-22.666-.5-1.334 0-3-.5-3.5-1.5-1.334-2.5-2-4.834-5.667-2.667-.5.334-3-2-4-3.5-1.167-1.833-2.5-2.166-3.167-.333-1.166 3.166-2.833 1.5-4.166.833-2-1.166-4-2.666-6-4-.5-.333-1.167-.166-1.667-.333.333.5.667 1 .833 1.5.334.5.5.833.834 1.333-.5.167-1.167.667-1.667.5-1.333-.666-3.5-2-3.5-2.333 1.167-4.334-3-3.5-4.5-4.667-2-1.5-4.833-2-7.5-2.666-1-.167-3.167-.167-1.5 2.166 2.167 3.334-1.5 4.667-2.667 6.834-.166.333-2 .166-2 0-.833-4-3.5-3-6.166-2.5-.334 0-1.5-1.5-1.5-2.334 0-3.5-1.834-2-4-2.166-5.834-.667-11.167 3.333-17.334.666-3.333-1.333-7.666-.166-11.666-.666-3.5-.5-8.167 2-9.834-3.667 0-.167-1.5-.167-1.833 0-4.5 5.666-4.333 5.666-11.5 2.666-1.667-.666-3.5-.833-5.167-1.333-.5-.166-1.333-1-1.333-1.5 0-.666.667-1.333 1-2-1 .5-1.833 1-2.833 1.334-1.167.5-2.167.833-3.334 1.166-.333.167-1.333-.166-1.333-.5-.167-.833-.167-1.666-.167-2.5-.833.667-1.833 1.167-2.666 1.834-.334 0-.667 0-1-.167.166.166.5.333.666.333-.833 0-1.833 0-2.666.167-.167-5.5-4.5-4.167-7.667-4.334-2.667-.166-5.333.5-6.833-2.833-.334-.833-2.167-1.666-3-1.5-8 1.834-15.167-2.333-22.834-3.166-2.666-.334-5.666.333-8.333.333-4.167 0-4.5-.5-3.167-3.834.167-.166-.833-1.166-1.5-1.333-3.333-.833-6.666-1.5-10-2.333H732h-.167l-1.5-1c-1.166 3.5-3.166.666-4.833.666-1.667 0-3.667.334-4.833-.5-1.667-1.166-2.667-3.166-4-5-.5-.666-.5-1.5-.667-2.166-.333.5-.5 1.333-1 1.666-.5.334-1.167.167-1.833 0-3.167-.5-6.334-1-9.5-1.666-1-.167-1.834-.834-2.667-1.5-2.5-2.167-4.833-3.334-6.667-3.5-.166-.167-.333-.167-.333-.334-3.833-5.333-8.5-4.333-13.667-2.333-.666.167-1.333.167-2.166.167 1-5.167-2.5-1.334-3.334-1.334-3.166.167-5.166-1-7.666-3-2-1.5-4.334-5.5-7.834-2C657 9.214 655 9.214 653 11.381c-3.667 4-8.167.333-12.167 1-1.333.333-2.833 1.166-4 1-2.166-.5-4.333-1.667-6.5-2.334-4.166-1.166-8.333-3.333-12.5-3.166-4.166.167-7.333-1.833-10.166-3.667-2.5-1.833-3.667-2.333-5.5.167-.334.5-1.167.667-1.667.833.333-.666.833-1.166.833-1.666s-.333-1.334-.833-1.5c-1.333-.834-2.833-2.334-4-2-1.167.333-2 2.166-3 3.333-2.667.5-5.333 1.167-8 1.5-.667 0-1.5-1.167-2.333-1.5-.667-.167-1.667 0-2.334.167-2.333.666-4.5 1.166-6.833 2.166-.667.334-1.667 1.167-1.5 1.834.5 4.333-5.333 10.666-9.5 10.166-.333 0-.667 0-.833-.333-3.167-3.5-3.667-.5-4.667 1.833-.333.834-1.167 2.167-1.5 2-4.667-1-7.333 4.334-11.833 3.5-1.167-.166-2.5 1.334-3.667 2.167h-1.167l-2 .5c-2.333 2-5 2-7.166.166-.5-.5-1.167-.666-1.667-1.166.167.666.167 1.333.167 2.166.5 3.5-2.167 4.167-4.5 5-1.167.334-2.667.167-3.667.834-3.167 1.833-5.833 3.5-10.167 1.666-2.666-1.166-7 .834-10.333 1.834-1.833.5-3.833 3-3-1.5h-1.667c-4.333 2.666-8.666 5.333-12.833 8l-.167.166c.5.167 1 .167 1.667.334l.167-.167-.167.167h.167l-2 1.5c0-.5.166-1.167.166-1.667-3.333 2.5-6.5 5.167-10 7.334-2.166 1.333-4.833 1.833-7.333 2.5-.167 0-.667-1-1-1.667-.5-1.167-1.167-3.334-1.333-3.167-1.5.167-3.167.834-4.5 1.667-.5.333-1.5 2.666 1 1.166.333-.166.666.167 1 .167-.167.167-.334.5-.5.667-3.5 2-5.5 6.666-11.334 3.166-2.5-1.5-7.833 1.834-11.833 3-1.167.334-2.5.5-3.667.667-1.333.167-2.833.167-4.166.5-6.334 2-12.5 4.834-19 6.334-6.834 1.666-13.667 1.5-20.5-1.167-3.334-1.334-6.667-3.167-10 1.166-1.167 1.5-4.334 1.834-6.667 2.167-2.833.5-5.833.5-8.833.667 0-.667.166-1.334.166-2.167h-.5c0 .667.167 1.334.167 2-.333 3-2.333 2.167-3.5 1.167-6.5-6.834-14.5-8.167-23.333-6.667-2.834.5-5.834.667-8.834.667-4 0-6.666 1.833-8.333 5.166-.167.5-.833.834-1.167 1.167-.166-.5-.166-1.166-.333-1.666-.167-.667-.5-1.834-.667-2-3.333-.167-8.833-1.5-12.333-3-.5-.167-1.667-.167-1.833.166-2.334 5.334-8.334 4.334-12.167 7-2.833 2-5.667 3.667-8.5 5.334-.833.5-2.667.833-2.667.833-1.666-3.834-4.5-1.334-6.166-.667-5.334 2.334-10.167 4-15.167-.5-.833-.666-2.833-.833-3.667-.333-2.5 1.833-4.666 4-7 6-1.5 1.333-3.666 1.833-5.833 1.166-.5-.166-1 .334-1.5.334-3.5.833-7.167 1.5-10.5 2.666-3.167 1.167-6.333-.166-9.167.5-2.5.5-5.333 3-6.666 5.5-2.5 4.834-6.167 4.834-10.5 4.167-1.334-.166-2.834 0-4 .5-1.834 1-3.334 2.667-6 1.5-.5-.166-2.334 1.667-3.167 2.834-1.167 1.833-1.5 4.833-4.833 2.333-.334-.167-1.167 0-1.5.333-7 5.5-14.834 3.834-22.5 3-2-.333-4.167-.166-6.167.334-3.667 1-7.167 2.5-10.833 3.666-.5.167-1.167 0-1.667-.333-4.5-2.5-9.167-2.5-14-.833-.5.166-1.333.5-1.667.166-4-3.333-7.666-.333-11.5.167-4.833.667-9.666 2.5-13.833-2.167-.833-.833-3-.666-4.667-.5-4.666.5-8-2.333-11.333-4.666-1-.667-2.667-.667-4-1v-.167c-5-1-9.167-6-15-2.834a1.422 1.422 0 01-1.167 0C59.5 95.882 59.5 96.215 55.5 96.215c-4.167 0-8.333-.833-12.333-1.666-2-.334-3.834-1.834-5.834-2.5-.833-.334-1.833-.5-2.666-.834.833 4.834-3 1.667-4.334 2.667 0-.834-.166-1.667-.166-2.5-2.167-.667-4.334-1.334-6.5-2.167-.334-.166-.5-1.166-.5-1.666 0-.834.333-1.667.5-2.5-1.334.333-2.667.333-3.834.833-.5.166-.833 1.333-1.333 1.333-6.167.167-12.333.5-18.5.167v44.833h2400V55.048c-1-.167-2.17-1-3.33-2.167zM180.833 107.882l-.166-.333H181l-.167.333zM559.5 17.047l.167-.166.166.333-.333-.166zm34.833-13.333c-.166-.333-.333-.833-.5-1.166 0 0-.166 0-.166-.167v-.167s0 .167.166.167c.334.167.667.5 1 .667-.166.333-.333.5-.5.666zm119 26.167c0-.167 0-.5-.166-.667.166-.166.5-.333.666-.5l-.5.5c.167.334 0 .5 0 .667zm18.5 1.833l-.166-.333.166.166v.167zM790 51.214s-.167-.166-.333-.166c.166-.167.5-.167.666-.334 0 0 .167.167.334.167-.167.166-.5.333-.667.333zm96 11.334c-.667-.834-1.333-1.334-1.5-2-.167-.167.5-.834.833-1.167.334.5.834 1.166 1.167 1.833.167.167-.167.667-.5 1.334zm1.167-4.667c-.167-.167-.5-.334-.667-.5l.5-.5c.167.166.333.5.5.666-.167 0-.333.334-.333.334zm4.666 4.666c-.833-.166-1.666-.666-2.333-1.166-.167-.167.167-1.167.333-1.667.667-.166 1.334-.333 1.834-.5.333 1 .833 1.834 1.166 2.834.167 0-.666.5-1 .5zm56 11.334v-.167l.167.167h-.167zm78.497 16.333c-.16-.833-.16-1.5-.33-2.333.33.666.67 1.333 1.17 2.166-.34.167-.5.167-.84.167zm13.84-1.333c0 .5-.17 1-.34 1.666-.16 0-.33-.166-.33-.166.17-.5.33-1.167.67-1.5zM1542 24.047c-.17-.166-.33-.333-.33-.666 0 0 .16-.167.33-.167s.33.167.67.334c-.34.166-.5.333-.67.5zm14 .5c-.83-.5-1.67-1-2.5-1.666.17-.167.33-.334.67-.667.83.5 1.66 1 2.5 1.5-.34.334-.67.834-.67.834zm26.5-.833c-.5-.5-1-.833-1.5-1.333h-.17l.17-.167.17.167c.5-.167 1-.167 1.5-.334-.17.5-.17 1.167-.17 1.667zm3.33-5.666c-.16-.167-.33-.167-.5-.334l.34-.333c.16.166.16.166.33.333-.17.167-.17.334-.17.334zm6.17 4.166c-1.67-1-3.33-2-5-3 .67-.666 1.33-1.5 2-2.166 1.17 1.333 2.33 2.666 3.67 4.166-.34.334-.67 1-.67 1zm1.5-6.5c.5-.167 1.17-.667 1.67-.667 1.5.167 3 .5 4.5.667h.16l.17.167h-.33c-1.67.5-3.17 1-4.84 1.166-.33 0-.83-.833-1.33-1.333zm26 11.167h-.67c0-.167 0-.5.17-.834.17.167.33.167.5.334.17.333 0 .5 0 .5zm30.5 13.5l.33.166c-.16 0-.33-.166-.33-.166zm13.17 6.333c-.5-.5-1-1-1.34-1.666.34-.167.67-.5 1.34-.834.33.667.66 1.334.83 1.834 0 .166-.83.666-.83.666zm6.66-4.333c-.16-.334-.33-.667-.33-1l.5-.334c.33.334.5.667.83.834-.33.166-.5.333-1 .5zm1.5-4c0-.167-.16-.167-.16-.334 0-.166.16-.166.16-.166 0 .166.17.166.17.333 0 0 0 .167-.17.167zm20.34-1c-.17-.167-.17-.167-.17-.334 0-.166.17-.166.33-.333l.34.334c-.34.166-.5.333-.5.333zm2-11l.16-.334.17.334h-.33zm-.17-3c-.33-.167-1-.5-.83-.667.16-.5.33-1 .66-1.666.34.166.67.333 1 .5-.33.833-.5 1.333-.83 1.833zm3 3.666c-.17-.166-.5-.5-.5-.666 0-.334.33-.5.33-.667.17.167.5.5.5.667 0 .166-.16.333-.33.666zm19.17-11.666c-.17-.334-.34-.667-.5-1-.17 0-.17-.167-.34-.167l.17-.167c0 .167.17.167.17.334.33.166.5.5.83.666-.17.167-.33.334-.33.334zM1867 25.047c-.33-.333-.67-.833-1-1.166h.17c.16.333.5.666.83 1.166 0 0 .17 0 .17.167 0-.166 0-.166-.17-.166zm28.67 11.834c-.17-.167-.34-.167-.34-.167.17-.166.34-.5.34-.666.16.166.16.166.33.333 0 0-.17.333-.33.5zm75.66 21.333c0-.5.17-.833.17-1.333v-.334.334c0 .5.17.833.17 1.333h-.34zm12-2.166l-.16-.167h.33l-.17.166zm17.34-.334l.16-.333.17.333h-.33zm51-1.333c0-.167-.17-.334-.17-.334v-.333l.17.167v.5c0 .166 0 .166.16.333-.16-.166-.16-.333-.16-.333zm1.16 2c-.5-.5-.66-1.167-1-1.667h-.16c.66 0 1.5 0 1.83.334.33.333.33 1.166.5 1.833-.17-.167-.83-.167-1.17-.5zm74 22.5l1.5-.5v-.167l.17.167h-.17c0 .666 0 1.166.17 1.833-.5-.5-1.17-.833-1.67-1.333zM2149 90.047c-.83-.166-2-.833-2.5-1.5-.5-1-1.5-2.5.67-3 0-.5-.17-1.166.16-1.666.17-.5.84-1 1.34-1.334.16.667.16 1.334.33 2h.17c.16.167.33.334.66.334-.16-.167-.5-.167-.66-.334-.5.334-1.17.667-1.67 1v.167c.67.667 1.17 1.5 2 2 .5.334 1 .5 1.67.667-1 .666-1.67 1.833-2.17 1.666zm6.17 9.667c-.34-.5-.67-1.166-1-1.833.16-.667.5-1 .66-1.5.34.833.84 1.5 1 2.333 0 .167-.5.667-.66 1zm30.5-4.166c-.34 0-.67-.334-.84-.667.17-.334.34-.834.67-.834.17 0 .67.334 1.67 1-.84.167-1.17.5-1.5.5z"
      ></path>
    </StyledSvg>
  )
}

export default Rip4
