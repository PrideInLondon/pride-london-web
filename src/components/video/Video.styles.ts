import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'

export const StyledFigure = styled.figure`
  margin: 0 0 2em 0;
  position: relative;
  width: 100%;

  ${compose(layout, space)}
`

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
`

export const StylediFrame = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
`

export const VideoImageWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  position: relative;
`

export const StyledVideoImage = styled.img`
  width: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
