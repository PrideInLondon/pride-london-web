import styled from 'styled-components'
import { darken } from 'polished'

export const SocialList = styled.div`
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const SocialItem = styled.div`
  &:not(:last-child) {
    margin-right: 15px;
  }
  &:first-child {
    margin-left: 15px;
  }
`

export const SocialLink = styled.a`
  display: block;
  svg {
    height: 20px;
    width: 20px;
    path {
      transition: fill 0.15s linear;
    }
  }
  &[href*='facebook'] {
    path {
      fill: #4267b2;
    }
    :hover,
    :focus {
      path {
        fill: ${darken(0.1, '#4267b2')};
      }
    }
  }
  &[href*='twitter'] {
    svg {
      width: 25px;
      height: 20px;
      path {
        fill: #1da1f2;
      }
    }
    :hover,
    :focus {
      path {
        fill: ${darken(0.1, '#1da1f2')};
      }
    }
  }
  &[href*='linkedin'] {
    path {
      fill: #0077b5;
    }
    :hover,
    :focus {
      path {
        fill: ${darken(0.1, '#0077b5')};
      }
    }
  }
`
