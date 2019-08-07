import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const GalleryImageContainer = styled.div`
  position: relative;
  max-height: 500px;
`

export const GalleryImg = styled.img`
  max-width: 100%;
`

export const ImageCounter = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  padding: 8px 16px;
  color: ${theme.colors.indigo};
  font-family: Poppins;
  font-size: 14px;
`

export const FullScreenButton = styled.a`
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 40px;
  width: 40px;
  background-color: white;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
    padding: 8px;
    transition: all 0.1s ease-in-out;
    &:hover {
      padding: 6px;
    }
  }
`
