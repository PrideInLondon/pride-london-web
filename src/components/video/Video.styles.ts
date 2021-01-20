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
`

export const StyledVideoImage = styled.img`
  width: 100%;
`
