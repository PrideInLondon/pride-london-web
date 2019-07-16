import styled from 'styled-components'
import Button from '../../../button'

export const BackButton = styled(Button)`
  border: none;
  border-radius: 0px;
  display: block;
`

export const ThumbnailsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`

export const Thumbnail = styled.button`
  height: 100px;
  width: 100px;
  margin: 0 2px 5px 0;
  cursor: pointer;
  border: none;
  transition: transform 0.2s;
  padding: 0;

  &:hover {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
