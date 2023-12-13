import { graphql } from 'gatsby'
import { HomePage } from '../homepage'

export const query = graphql`query HomePageQuery {
  file(relativePath: {regex: "/homepage/videoPoster/"}) {
    size
    name
    childImageSharp {
      desktop: gatsbyImageData(width: 1600, quality: 100, layout: FIXED)
      tablet: fixed(width: 800, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
      mobile: fixed(width: 400, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
}`

export default HomePage
