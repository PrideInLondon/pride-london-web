import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image"
import { media } from '../theme/media'
import theme from '../theme/theme'

export const CardImage = styled(GatsbyImage)`
  border-radius: 4px;
  max-width: 100%;
  padding-top: 100%;
  height: auto !important;

  ${media.tablet`
    img {
      // width: 100% !important;
      height: 450px !important;
    }
  `};
`

export const CardAnnouncement = styled.a`
  position: relative;
  display: block;
  border: none;
  position: relative;
  color: ${theme.colors.white};
  z-index: 1;
  text-decoration: none;
`

export const CardTitleWrapper = styled.div`
  position: block;
  padding: 0;
  padding-left: 10px;

  ${media.tablet`
    position:absolute;
    bottom: 0;
    left: 0;
    padding: 0 35px 40px;
  `};
`

export const CardTitle = styled.h2`
  background-color: ${theme.colors.indigo};
  font-size: 20px;
  line-height: 31px;
  margin: 0;
  color: #fff;
  display: inline;
  position: relative;
  white-space: pre-wrap;
  border: 0 solid ${theme.colors.indigo};
  border-width: 0.35em 0;
  box-shadow: 10px 0 0 ${theme.colors.indigo}, -10px 0 0 ${theme.colors.indigo};
  box-decoration-break: clone;
  // position: absolute;
  // left: 40px;
  // width: 80%;
  // top: 270px;

  ${media.tablet`
    font-size: 2rem;
    line-height: 1.5;
    font-weight: 600;
    // position: absolute;
    // left: 60px;
    // top: 300px;
    // width: 60vw;
  `};
`

export const CardDesc = styled.h2`
  background-color: ${theme.colors.indigo};
  font-size: 14px;
  line-height: 31px;
  margin: 0;
  color: #fff;
  display: inline;
  position: relative;
  white-space: pre-wrap;
  border: 0 solid ${theme.colors.indigo};
  border-width: 0.35em 0;
  box-shadow: 10px 0 0 ${theme.colors.indigo}, -10px 0 0 ${theme.colors.indigo};
  box-decoration-break: clone;

  ${media.tablet`
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 600;
  `};
`

export const CardWrapper = styled.div`
  height: 450px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;

  ${media.tablet`
    margin-bottom: 50px;
    overflow: hidden;
    position: relative;
    box-shadow: 10px 10px 20px -3px #c5c5c5;
  `};
`
export const CardTextWrapper = styled.div`
  position: absolute;
  left: 40px;
  width: 80%;
  top: 250px;

  ${media.tablet`
    position: absolute;
    left: 60px;
    top: 280px;
    width: 60vw;
  `};
`

export const ButtonWrapper = styled.div`
  margin-left: -10px;
  margin-top: 10px;
`
