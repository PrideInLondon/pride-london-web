import styled from 'styled-components'

export const Background = styled.div`
  position: relative;
  display: flex;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 250px;
  position: relative;
  min-height: 480px;
`
