import styled from 'styled-components'

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  margin-bottom: 2em;

  iframe {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  div {
    position: absolute;
    padding-bottom: 56.25%;
    width: 100% !important;
  }
`
