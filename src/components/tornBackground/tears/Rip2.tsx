import React from 'react'
import { StyledSvg } from '../TornBackground.styles'

interface Rip2Props {
  color: string
  variant: string
}

const Rip2: React.FC<Rip2Props> = ({ color, ...props }) => {
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
        d="M2396.33 73.46c-1.5-1-2.66-2.666-3.83-4.166-1.17 1.167-4.83 1.5-1.17 4.167.34.333.34 1.333.34 2-.84-.167-1.84-.167-2.67-.5-.5-.167-.83-.667-1.33-1.167 0 .667-.34 1.333 0 1.833 1.83 3.334-2.5 3.167-3 5-.5-.166-1.17-.166-1.5-.5-.34-.333-.34-1.166-.67-1.666-.17-.334-1-.5-1.17-.334-3.66 4.167-5.5 2.167-7.33-1.666-.33-.667-2.5-.334-3.5-.834-4.17-2-8.67-3.5-12.17-6.333-3.83-3-6.33-7.667-10.16-10.5-3.84-2.833-8.67-4.167-13-6.333-.84-.334-2-1.334-2-2.167-.17-3.167-4.84-8.5-8-8.5-.34 0-1.17 1.5-1.17 2.167 0 1.333.5 2.666.67 4 0 .5-.17 1-.34 1.5-.33-.334-.83-.667-1.16-1.167-.5-1-.67-2.167-1.34-2.833-.5-.5-1.66-.5-2.5-.834.17.667.17 1.5.5 2.167 1.17 2.5 2.67 4.833 3.34 7.333.33 1-1.34 2.5-2.5 3.667-.17.333-1.34 0-1.84-.333-3.66-2-7.33-4.167-10.83-6.334-.67-.5-1.33-1.666-1.33-2.5.16-1.166 1-2.333 1.5-3.333.83.667 1.5 1.5 2.33 2 .67.5 1.33 1 2 1.5-.17-.833-.33-1.667-.67-2.5-.83-2-1.66-4.167-2.83-6.167-.17-.333-1.33-.5-1.67-.333-.5.333-.66 1.167-.83 1.833-.67-.833-1.17-2-2-2.5-3.83-2.833-.33-7.833-3.67-11-2.66-2.5-4.33-2.833-6.5.167-.66.833-2 1.167-3 1.667-.16.333-.33.833-.33 1.166 2.17 6.167-.83 5.667-4.83 3.667-.34-.167-.84-.167-1.17 0-3.33 2-4 1.5-5.5-1.833-.83-2-2.33-3.834-3.67-5.834-.16.167-.16.167-.33.334-.33.666-.5 1.166-.83 1.833-.17-.167-.34-.167-.67-.333l1.5-1.5c0-.167.17-.334.17-.334v-.166c-1.67-.167-3.34-.5-5-.334-1.17.167-2.17.834-3.17 1.334-.17.5-.33 1-.5 1.666-1-2-6.67.334-4.33-4.833-3.17 0-6.34-.333-9.5-.167-2.34.167-4.84 1.167-7.17 1.167-1.5 0-5.33.5-3-3.5.17-.167-.5-1.167-.83-1.167-.34-.166-.84.5-1.34.834-1.66.666-3.33 1.5-5 2.166-2.33 1-5 1.834-7.16 3.167-2.5 1.5-4.5 3.667-6.84 5.333-.5.334-1.83.334-2 0-1.83-2.666-2.83-.833-5 0-2.16.834-5.16-1-7.83-1.666 0 0-.17-.334 0-.334 1.17-.833 4-2.166.83-3-2.5-.666-5.5 1.167-8.33 2-.33 0-.67 1-.5 1.334.67 1.666.5 1.166-1.33 2.166-1.84 1.167-3.34 3.334-4.67 5-2 2.5-3.83 5.334-6 7.834-1 1.166-2.67 1.833-4.17 2.666-.83.5-2.16 1-2.16 1.334.66 7.333-3.67 4.833-7.17 4-3.67-1-7.33-1.667-11-2.834-2.17-.666-4.17-2-6.33-2.833-2.5-1-3.84-3.167-7.5-3-4.5.333-9.5-.833-12.84-5.167-.5-.666-2-.666-3.16-1-.5 1.834-.84 3.834-1.34 5.667l-.33.333c-2-2-3.67-3.333-6.83-1.666-1.67.833-4.34 0-6.5-.667-4.17-1.167-8.17-2.667-12.17-4-.17.667-.5 1.667-.67 1.667-2.33-.167-4.66-.5-7-.5-1.83 0-3.5 0-5.33.166-3.83.334-7.17.667-11.17-1.5-3.66-2-8.83-1.666-12.5 2.667-1.16 1.333-4.33 1.167-6.5 1.5-.5 0-3.33 1-3.83 1.333-1.33 1.5-2 6-4.67 1-2.33 1.667-6.33-2.166-7.83 2.5-.33 1.334-1.17 2.5-1.67 3.834-1-2-2.16-3.834-3.16-5.834-.34-.833-.34-2-.5-2.833-.5.5-1.17 1.667-1.5 1.5-2.34-.5-4 .5-5.5 2-1.17-1.5-2.34-2.833-3.5-4.333-1.17-.334-2.17-.834-3.17-1.167.33.833.83 1.667 1 2.5.17.333 0 .833-.17 1.167-.66-.334-1.16-.667-1.66-1-1.5-1-2.84-2-4.34-3-.16.5-.33 1-.5 1.5-2.66-1.667-5.16-3.334-7.83-5.167v-1.167c0-.333-.33-.5-.5-.666.17.666.33 1.333.5 1.833-1.83-1.667-3.67-3.667-5.67-5.167-.66-.5-2.16-.166-3.33-.166v.166c-.5-.5-1.17-1.5-1.67-1.333-2.83.5-6.83.333-8.33 2.167-4.5 4.833-9.17.5-13.5 1.166-2.5.334-5.33-.5-8-.5-3.33-.166-6.5.667-7.33 4.5-.5 2-5.34 1.334-2.67 4.834-.67-.167-1.33-.667-2-.667-3.5.167-7.17-2.833-10.83-.167-1.84 3.167-3.67 4.5-7 1.167-.67-.667-3.67.833-5.5 1.333-.34.167-.84.5-1.17.667-1.33-4.833-2.33-1.667-3.83 0-.5.5-2.34 0-3.5.167-.5 0-.84.666-1.34 1-4.83.666-9.5 1.166-14.33 2.166-3.67.834-7.5 3.167-11.17 2.834-4.66-.5-4.66-.167-1.83 3 .17.166.17 1 0 1-.67.166-1.5.5-2.17.166-9.33-3.833-17.66-1.5-25.5 4.167-.5.333-1.5.833-1.83.667-7.83-5.334-16.17-22.834-24.17-23.167-3.16-.167-6.33-.833-9.66-1.167-7.67-1-15.5-2-23.17-2.833-1.67-.167-3.5.667-5.33.833-2.67.334-5.5-12.333-8.17-12.5-4.67-.5-8.33-9.833-11.67-6.166-1.5 1.666-4.16 3.666-6.16 3.5-6.5-.334-10.5-5.334-17-6-.17 0-.5.333-.84.5-6.83 4.833-1.66 9.166-9 2-4.5-4.334-5.66-2.5-5.83-.667.5 4.167-.17 2 0 0-.17-.667-.17-1.5-.33-2.5-.34-1.833-.67-3.5-1-5.167-.34-.166-.34-.666-.17-1.5-.17-.666-.33-1.333-.33-1.833-.84.833-1.5 1.667-2.34 2.5-.66.667-1.66 1.167-2.5 1.667h-.16.16c-.33-.167-.83-.334-1.16-.5-1 2-2.84 3-3.34.166-.66-4.333-1.66-2.333-3.16-.666-2.5 3-5 9.5-8.5 6-.5-.5-1.84-.834-2.34-.5-3.16 1.833-6.33-12.834-9.33-10.667-1.83 1.333-3.67 4.167-5.33 4.167-5.5-.5-10.84-2.5-16 1-.5.333-1.34-.167-2-.167-7-.5-14.67-6.167-18.84 2.333 0 .167-1 .334-1 .167-.5-.833-.83-1.5-1.16-2.333-.17 1-.17 2-.5 3-.17.5-.67 1.166-1.17 1.166-2.5.5-5-9.333-7.33-8.833-.67.167-1.17.5-1.84.833.5.334 1.17.667 1.67 1 .67.5 1.5 1 2.17 1.5-1 0-2 .5-2.84.167-5-2.5-9.33 8.833-13.83 9.667-.33 0-.67 1.333-.5 2 .17.666.83 1.333 1.33 1.833-1 0-2 0-3-.167-2-.166-5.33-1.333-6-.5-4.33 5.5-10.66-3.166-15.33-3.833-5.67-.667-9.67 2.333-14.5 3.167-5.67 1-11-5-16.33-3.334-.67.167-1.17.667-1.84 1.167-.83.5-1.66 1.333-2.5 1.667-1.66.666-3.33 1.166-5 1.666-1.5.5-3.5 2.5-4-1.166 0-.5-1.33-.834-2.16-1.334.16.667.5 1.5.5 2.167-.17 1.333-.5 2.667-.67 4l-.17-.333c-.5-.5-1.33-1.334-1.33-1.334-4.5 4.334-9.5-7.666-14-8-6.33-.5-10.17-12.166-13.17-6.166-2.33-.667-4.66-1.167-5.16-4.5-.5-3-2.34-2-3.84-.667-1.33 1.167-2.33 2.667-3.5 4v.167l-.16-.167v-.167c0-1.166-.17-2.333-.17-3.666-1 .833-2.33 1.5-2.83 2.5-.84 1.5-.67 4.166-1.5 4.5-1.5.5-3.67-1.167-5.17-.667-2.67.667-6 4-7.33 3.333-3.84-2-5.5.5-8.17 1.834-2 1-4.5 1.333-6.67 1.166-2.5-.166-5.66-2.333-7.33-1.333-3.5 1.833-6.33 1-9.67.333-.83 3-1.16 3.167-3.33 1.5-.33-.333-.67-.666-1-.5-2.67.834-5.17 2-7.67 2.5-2.16.5-4.5.667-6.66.667-3.17 0-6.5-.833-9.5-.5-5.17.667-10.34 2.167-15.5 3-1.67.333-3.5 0-5.17-.167-4.33-.166-8.67-3.5-12.83.5 0 .167-1-.666-1.5-1.166-2.5 2-5.17 3.166-7.67 0-1.17-.5-2.17-1-3.33-1.5-.67.5-1.34 1.166-2 1.5-.84.5-1.67 1-2.67 1.333.83.333 1.83.333 2.67.833.66.334 1.5 1.167 1.66 2 0 .5-1.16 1.667-1.66 1.667-1.17-.167-2.5-.667-3.34-1.333-2.16-1.834-3.83-16.167-7.33-14.334-3 3.167-6.83 3.334-10.83 3.334 0 3.666 0 3.666-3 2.166-.5-.166-1.17 0-1.84.167-2.33.333-7.5 4-10.33 5.667-2.83 1.833-6.5 2.5-9.83 4-1.84.833-4 1.666-5 3.166-1.5 2.334-3 2.667-5.67 2.334-1.5-.167-3.83.833-4.33 1.833-1.67 3-4.34 2.5-6.84 2.667-1.66.166-3.33.5-5 1-3 1-5.33-9-9-9-5.66-.167-9.83-3.5-13.66-6-4.34-2.667-3.17.833-4.17 2h.17c-1.67 1.833-5.17 4-5 5.5.66 3.833-2.17 2.5-3.5 3.333-.17 0-1.17-1.167-1.67-1.833-.33-.334-.67-.834-1-1.334-.17.5-.33 1-.67 1.5-1.83 2-3.33 4.5-6.83 2.667-.33-.167-1.83.667-1.83 1.167-.17 2.5 0 2.333-2.17 1.666-2-.5-4-2.5-5.67.834-.5 1-8.66-.667-9.33-1.334-3.17-3.166-6.67-6.166-10-9.166-.17-.167-1-.334-1.17-.167-3.66 2.333-7.16 2-10.66-.5-.5-.333-2.34.333-2.5.833-1.34 3.667-3.5 2.667-6.17 1.667-3.83-1.5-7.33-1.333-11.33 1-6.5 4-13.17.667-21.67-3.333-.33-.167-.83 0-1.17.166-2.66 1-6.33-1.166-7.83-2-5.67-3.166-9.67 1.834-11.83 3.834-3 3-6 2-7.67 1.166-4.5-2.166-8.33-6.5-13.83-5-2.17.667-5-1.5-7.34-1.166-6.33.833-12.66 2.166-19 3.666-3.66.834-7.33 5.334-11 0-.16-.333-1.33-.166-2.16 0-6 .667-12.5-1.5-18.34 2.5-.33.334-3.83 1.834-3.5-1.666 0 0-.83-.167-1.16-.167-4 1.5-7 0-9.84-3-1-1-4.33-1-5.83-.167-2.5 1.334-3.5.834-4.5-1.166-1.5-.5-3.33-1.667-4.33-1.167-5.5 2.333-10.84-.333-16.84-.5-3-.167-3.83-1.333-5.66-2.667-2.34-1.666-5-2.166-8.34.167-3.83 2.667-7.83 2.833-11.83 2-5.67-1.167-11.17-1.667-16.5 1.333-.67.334-1.5.5-2.17.334-7.5-1.5-15.33 8.833-22.33 5-.5-.334-1.333-.5-1.667-.167-4 4.333-6.833.167-9.333-1.833-3-2.167-8-2.5-9.5.833-1.833 3.833-4.667 9.5-7.667 8.167-4.166-1.667-6.166.5-8.333 3-2.667 2.833-4 7.166-9.167 6.5-1.666-.167-3.666 1.833-5.333 1.5-4.667-.667-7 1-7.5 5.5-.167 1.5-1.5 2.666-2.333 4.166-1-.666-2-1.166-2.834-1.833-1.333-1.167-7.166-.667-8.166 1-.167.333.666 1.167 1 1.833.166.334.666.5 1 .667-.167.333-.5.667-.834.833-3.333 1.167-6.5 2.667-10 3.667-3 .833-6.333 2-9.333 1.5-5.5-.833-10.5-1-16.167-.5-5 .5-10-.167-15.166 1.333-2 .5-4.834-1.333-7.334-2.166-2.833-1.167-5.666-2.167-8.5-3.667-3.666-1.833-7-4.167-10.666-6-1.167-.5-4.667-4-3.834 1.5-.666 0-1.666.333-2 0-1.5-1.667-2.666-3.333-4-5-.333-.333-.5-.833-.833-1.167-.167 2.334-2.5 2-3.667 3-.833.667-1.333 1.834-2 2.667 0-1.333-.166-2.667-.166-4.167 0-.5.5-1.166.833-1.666-.667 0-1.333 0-2 .166-3.5.834-6.833 1.667-10.167 2.5a648.018 648.018 0 00-8.333 2c-1.5.334-3.833.5-4.167 1.334-2.833 6.5-10.333 2.666-14 6.833 0 0-.333-.167-.333 0-2.5 2.167-3.333-1-5-1.5-.333 4.667-3.667.833-5.333 1.833-1.334.834-3.167.334-3-2.333 0-.833-2-2.333-3.167-2.5-2.833-.333-5.833-.167-8.833-.167H769v-.166h-.167c0-.334.167-.667.167-1l.167.166c-.5-1-.834-2-1.334-2.833-3.666 2.667-3.166-1.333-4.5-2.667-.833-1-1.5-2.666-2.333-2.666-3.333-.167-6.833.666-10.167.333-5.666-.5-11.5 2-16.833-1.833-2-1.5-4.167-2.834-6.333-4.334-2 1.167-4 2.167-5.834 3.334-.833.5-1.5 1.666-1.666 2.666-.167.5.833 1.334 1.166 2-1.5.167-3.5 1-4.333.5-3.167-2.666-6.333-4.333-10.667-4-5.333.334-10.833.334-16.166.167-2.5 0-5.5 1.5-7.334-1.833-.333-.667-2-.5-3-.834-2.333-1-5-1.666-7-3.166-2.833-2-6.333-1.334-7.833.166-2 2-2.167 2.667-3.5-.166-1-1.834-2-2.5-3 .333-.5 1.5-2.333 2.5-3.5 3.667-.833-.834-1.5-2-2.5-2.5s-2.167-.667-3.333-1c-.167.333-.334.666-.334 1-.166 0-.333-.167-.333-.167-1-.667-2-1.667-3.167-2.333-2-1-4.166-1.667-6.166-2.834-3.334-2-6.834-1.5-10.167 1.834-.167.166-1 .166-1.167 0-1.666-1.334-2.333-.5-3.666.833-1.167 1.167-3.834 1.333-5.667 1.167-2.333-.334-3-.334-1.5 2 .333.5 0 1.5-.167 2.333-.5-.333-1.333-.333-1.666-.833-4.167-6.167-11-6.334-17.334-7.667-2.166-.5-4.5 0-6.666.167-4.667.333-6.667 6.5-12 5.666-.167 0-1 1-.834 1.334 1.334 5.166-2 4-4.833 3.5-1.333-.167-3.5-1.167-4-.667-4.167 4.333-10.333 3.167-14.667 5.667-6.333 3.666-12.5 1.666-18 1.166-6-.666-11.833-2.166-18-1.833-.5 0-1.166-.333-1.666-.667-.667-.333-1.667-1.5-2-1.166-4.834 2.166-9.5.833-14.167.333-1.667-.167-2.167-.333-2.667-1.5-.333-.667-1.166-1.333-1.833-2-.333.833-.333 1.833-.833 2.333-.334.5-1.667.834-2 .667-2.167-1.167-4.667-4.167-6-3.5-3 1.167-4.5-.333-6.667-1.333-.167 0-.667.166-.833.333-1.334 2.667-1.834.5-2.834-.333-3.5-3.5-7.333-3.5-11-.167-3.833 3.667-7.666 4-12.5 1.667-.5-.334-1.333.5-2.166.5-4.167.166-8.167 3.833-12.667.666-2.333-1.5-5.5-2.833-8-2.5-3.333.334-6.333 2.834-9.5 3.667-6.167 1.5-11.5 7-18.667 4-.166-.167-.833 1.167-1.333 1.167-4.5.166-9 .666-13.333 0-2.167-.334-8.667-2.834-11.334-2.167-3.666 1-6.833 1-9.333-2.5-.333-.5-1.167-.833-2-1-3.833-.667-7.667-1.5-11.5-1.5-3 0-6 1.333-9 2 0 0-.167.333 0 .333 2.5 4.334-2.167.834-2.333 2.167 0-.833-.167-1.667-.334-2.5-.166-.333-.666-.833-.833-.667-4.333 2-7.833-.833-10.667-3-2.833-2.166-6.5-1.5-7.333-.5-2.167 2.167-4.667 1.5-6.833 2.5-4.334 2-8 4-13 1.167-2-1.167-4.834-1-6.834-3-1-1-2.833-1.667-4-1.333-4.833 1.5-9.833 3.166-14.333 5.5-2.5 1.333-4.167.333-5.833-.5-4-2-8.667-1.334-12.834-2.167-4.666-1-11-3-15.5 2-.166.167-1-.167-1.666-.167-4.167-.5-8.334-1.166-12.334-1.166-1.5 0-3 1.833-4.666 2.333-2 .667-2.5 4.667-5.834 2.667 0 0-1.333 2-2.166 3-1.667 1.666-4.667 5-4.834 4.833-3.333-2.833-6.833 3.667-9.833 0-5.333 2.5-10.833.333-16.333 1-1.334.167-2.834 0-4-.5-3-1.167-5.5-3.5-9.167-2.5-.833.333-2.667-1-3.167-2-2.5-4-4.166-3.167-6.166.5-.834 1.5-2.334 2.667-3.5 3.833-.167.167-1 0-1.167-.166-1.167-6-1.833-.167-2.167.166-1.333 1.334-2.166 2.834-3.5 4.167-2 1.833-3.666 1.167-4.166-1.333-.334-2.5-.5-3.167-2.667-.834-1.667 1.834-3 1.167-4-.666-.167-.334-1.333-.334-2-.167-1.333.667-2.333 1.833-3.667 2.167-4 1-8 1.5-11.833 2.166-3.333.5-6.333.834-8.5-2.833-.833-1.333-3.5-3.167-4-2.833-2.333 1.833-3 0-4.167-1.334-1.166-1.333-3-3.333-4.166-3.166-3 .5-5.834 1.833-8.667 3.333-1.5.833-1.167.833-2-.667-1.333-2.5-3.5-5.333-6.833-4.666-3.167.666-2.834.833-6.334-1-2-1-5.333-1.167-7-.167-4.5 2.833-6.833 2.833-10.333-1.5-.333-.333-.833-1-1.167-1-4 1.333-4.833-1.167-5.833-4.333-1-3-2.333-5.834-6.833-4.5-1.667.5-4.167 0-5.5-1-2-1.5-3.334-3.834-5-5.834-2.5-3.166-5.667-2.833-7.167.667-.167.333-.667.667-.833.667-3.167-3.167-4 1-5.834 1.833-1.166.5-2.333 1.167-3.5 1.333-2.666.167-5.5-.5-7.833.334-3.667 1.333-7.167-3.334-10.667-.167-.166 0-.666-.667-1.166-.667-.667 0-1.5-.166-2.167-.166v72.5h2400V76.127a34.29 34.29 0 00-3.67-2.666zM165 57.46l-.167-.333h.334l-.167.334zm.167-2s-.334-.166-.167-.333c.167-.333.167-.5.333-.666.167.166.167.333.334.5l-.5.5zm33.666 4l-.166-.166c.333 0 .5 0 .833-.167 0 0 .167.167.167.334h-.834zM630.5 40.295c-.333-.833-.667-1.333-.667-1.833 0-.167.667-.5 1-.667.334.5.667 1 .834 1.5-.167.167-.667.5-1.167 1zm40.667-2.333l-.167-.334h.333l-.166.334zm55.5 7.166c-.167-.166-.334-.5-.5-.666.333 0 .5-.167.833-.167.167 0 .333.333.5.667-.333.166-.833.333-.833.166zM734 46.294c-.167-.667-.167-1.333-.333-2l-4-2-.167-.167c.167 0 .167 0 .167-.166 0 .166 0 .166-.167.166l4 2c.333.834.5 1.5.5 2.167.167 0 .167 0 .167.167l-.167-.167zm3.833.167v-.5h-.166c-.5 0-.834.166-1.334.166 0-.333 0-.5.167-.666.333.166.833.333 1.167.5h.166v.166c.167.167.334.167.5.334-.166-.167-.333-.167-.5 0zM831 49.794c0 .333-.333.667-.667 1-.166-.5-.666-.833-.666-1.333 0-.167.5-.5.833-1 .333.5.5 1 .5 1.333zm131.333-11.667s-.166-.166-.166-.333c.166 0 .5-.167.833-.333 0 .166.167.333.167.5-.334 0-.5 0-.834.166zm350.337-13.5c-.34-.5-.67-1-1-1.333-.17 0-.17-.167-.34-.167 0 .167.17.167.17.334.33.333.83.666 1.17 1 .16-.167 0 0 0 .166zm102.66 0c-.16-.333-.33-.666-.5-1 .34 0 .84-.333 1.17-.166.33 0 .5.5.67.833-.5 0-.84.167-1.34.333zm82-7.666l-.16-.334h.16v.334zm5.84.666c-.17-.166-.5-.333-.5-.5 0-.166.33-.333.5-.5.16.167.5.5.66.667-.33.167-.5.333-.66.333zm21.66-4.666c-.16-.334-.33-.667-.66-1 .83-.5 1.83-1 2.66-1.167.17 0 .67.667.84 1.167-.67.333-1.67.666-2.84 1zm11.34-7.167c-.5.333-.84.833-1.34 1.167-.16-.334-.33-.667-.33-1 .5 0 1 0 1.67-.167l.16-.167.17.167h-.33zm12.66 1.5c0-.167 0-.333.17-.667 0 .167.17.334.17.5-.17.167-.17.167-.34.167zM1577 22.627c.17-.166.33-.333.67-.5l.16.334c-.33.166-.5.166-.83.166zm168-12v-1h.17-.17c-.5-.5-.83-1-1.33-1.5h.16c.5.5.84 1 1.34 1.5v.334c0 .166.16.333.16.666-.16-.166-.33 0-.33 0zm160.17 44.5c-.17 0-.34-.333-.5-.5.33-.166.66-.333 1-.5.16 0 .33.334.5.834-.5 0-.84.166-1 .166zm16.33-4l.17-.333.16.333h-.33zm7.83 0c-.66-.833-1.16-2-1.5-3-.16-.5.34-1.166.34-1.666l1.5 1.5c.66.666 1.5 1.5 2.16 2.166-.83.334-2.16 1.334-2.5 1zm9.5.834a5.03 5.03 0 01-1.16-.834c.33 0 .5-.166.83-.166.33.166.67.5 1.17.833-.5.167-.67.167-.84.167zm2.17-2.5c-.5-.167-.83-.667-1.17-1 .17-.167.5-.5.67-.5.5.166 1 .5 1.83.833-.66.333-1.16.667-1.33.667zm1.5-4.834c0-.166.17-.166.17-.333.16 0 .16.167.33.167-.17 0-.5.166-.5.166zm5 3.834c-.17 0-.5-.167-.67-.334.17-.166.34-.333.5-.5.17.167.5.167.67.334 0 .333-.33.5-.5.5zm4.5-.5c-.33-.5-1-.834-1-1.334 0-.5.33-1 .83-2 .84 1 1.5 1.5 1.5 2-.16.334-1 .834-1.33 1.334zm52.83-16l.17.166-.17-.166zm1.67 3.666c-.17 0-.17-.166-.17-.166s.17-.167.17-.334c.17 0 .17.167.17.167 0 .167-.17.333-.17.333zm33.67 16.167c-.84-.333-2.17-1-2.17-1.5 0-1.167.5-2.167 1-3.333.83 1.333 1.5 2.666 2.5 4.333-.5.167-1 .667-1.33.5zm61.16-9.5c-.16-.167-.33-.167-.66-.333 0-.167.16-.334.16-.334.17 0 .5.167.67.334 0 .166 0 .166-.17.333zm31.34 4.167c-.5-.334-1-.667-1.34-1l.34-.334c.5 0 1 .167 1.66.334-.33.166-.5.666-.66 1zm51.33 6c-.17 0-.5-.167-.83-.167.16-.333.33-.667.66-1 0 0 .5.167 1.34.667-.34.166-.67.5-1.17.5zm103.33-14.167c.17-.167.17-.5.34-.667.16.167.16.5.33.667h-.67zm8.34-4c.16 0 .5 0 .66-.167.17.334.5.834.5 1.167.17.5 0 1.167 0 1.667-.5-.167-1-.334-1.16-.834-.17-.5 0-1.166 0-1.833zm8 14.5c-.67-.667-1.34-1.5-2-2.167v-.333.333c-1.34 1.5-4.17-4.5-4.67 1-.33-.166-.67-.333-.83-.5-1.5-2-3-3.833-4.34-6-.33-.666 0-1.666 0-2.5.67.167 1.67.334 2.17.834 1.67 1.333 3.33 4.5 5 0 0-.167 1.83-.167 2.17.333 1.33 2 2.66 4.167 3.66 6.333.17.667-.66 1.834-1.16 2.667zm26.33 0c-.83-.333-1.5-.5-2.33-.833.16-.334.33-.667.5-1 .66.666 1.33 1.166 1.83 1.833h.17-.17c.17 0 .17 0 0 0zm.17.167s.16-.167 0 0z"
      ></path>
    </StyledSvg>
  )
}

export default Rip2
