import { graphql } from 'gatsby'
import YouMeUsWePage from '../../../campaigns/youMeUsWe/YouMeUsWePage'

export const query = graphql`
  query YmuwQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default YouMeUsWePage
