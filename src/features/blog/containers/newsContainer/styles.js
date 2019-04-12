import styled from 'styled-components'
import Button from '../../../../components/button'
import theme from '../../../../theme/theme'

export const Container = styled.div`
  margin: 1rem;
`

export const FeaturedArticleContainer = styled.div`
  position: relative;
`

export const FeaturedArticleTitle = styled.h3`
  color: ${theme.colors.indigo};
  font-weight: bolder;
  margin: 10px 0;
`
export const ShowMoreButton = styled(Button)`
  margin: 30px auto 50px auto;
`
