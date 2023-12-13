import { graphql } from 'gatsby'
import { EventsPage } from '../events'

export const query = graphql`query eventsPageQuery {
  file(relativePath: {regex: "/events/heroImage/"}) {
    size
    name
    childImageSharp {
      desktop: gatsbyImageData(
        width: 920
        height: 500
        quality: 100
        transformOptions: {cropFocus: CENTER}
        layout: FIXED
      )
      tablet: gatsbyImageData(width: 768, height: 417, quality: 100, transformOptions: {cropFocus: CENTER}, layout: FIXED)
      mobile: gatsbyImageData(width: 480, height: 260, quality: 100, transformOptions: {cropFocus: CENTER}, layout: FIXED)
    }
  }
}`

export default EventsPage
