import styled from 'styled-components'
import Button from '../../../button'

export const BackButton = styled(Button)`
  border: none;
  border-radius: 0px;
  display: block;
`

export const ThumbnailsContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  display: block;
  white-space: nowrap;
  overflow-x: auto;
  padding: 0 15px;
`

export const Thumbnail = styled.button`
  height: 110px;
  width: 180px;
  margin: 0 15px 5px 0;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  padding: 0;
  opacity: 0.25;

  ${props =>
    props.active &&
    `
    opacity: 1;
  `}

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
    border-radius: 6px;
  }
`
