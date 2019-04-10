import styled from 'styled-components'
import { media } from '../../../../theme/media'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  margin: 0 auto;

  ${media.tablet`
    /* width: 60%; */
  `};
`
export const Description = styled.div`
  font-size: 18px;
  line-height: 1.33;
  color: #000;
  text-align: left;
  padding-bottom: 25px;

  ${media.tablet`
    font-size: 22px;
    line-height: 1.18;
    text-align: center;
    padding: 0 0 30px 0;
  `};
`
export const Title = styled.h2`
  margin: 0;
  font-size: 36px;
  line-height: 1.17;
  font-weight: 700;
  padding: 10px 0;

  ${media.tablet`
    padding: 30px 0;
    font-size: 56px;
    line-height: 1.21;
  `};
`
