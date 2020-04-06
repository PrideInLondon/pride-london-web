import { graphql } from 'gatsby'
import { EventsPage } from '../events'

export const query = graphql`
  query eventsPageQuery {
    file(relativePath: { regex: "/events/heroImage2/" }) {
      size
      name
      childImageSharp {
        desktop: fixed(
          width: 920
          height: 500
          quality: 100
          cropFocus: CENTER
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
        tablet: fixed(
          width: 768
          height: 417
          quality: 100
          cropFocus: CENTER
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
        mobile: fixed(
          width: 480
          height: 260
          quality: 100
          cropFocus: CENTER
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

export default EventsPage
