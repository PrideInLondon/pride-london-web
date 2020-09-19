import styled from 'styled-components'
import { media } from '../theme/media'

export const ListTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  ${media.tablet`
    margin-bottom: 15px;
  `};
`

export const MainSponsorsContainer = styled.div`
  margin-top: 30px;

  ${media.tablet`
    margin-top: 40px;
    max-width: 646px;
  `};
`

export const SecondarySponsorsContainer = styled.div`
  ${media.tablet`
    max-width: 860px;
  `};
`
