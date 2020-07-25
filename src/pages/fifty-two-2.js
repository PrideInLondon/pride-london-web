import { graphql } from 'gatsby'
import { FiftyTwoPage } from '../fifty-two/FiftyTwoPage'

export const query = graphql`
  query fiftyTwoPageQuery {
    contentfulCustomPageContent(title: { eq: "FIFTY-TWO" }) {
      title
      subtitle
      bodyText {
        json
      }
      cta {
        ctaTitle
        bodyText
        buttonUrl
        buttonText
      }
    }
  }
`

export default FiftyTwoPage
