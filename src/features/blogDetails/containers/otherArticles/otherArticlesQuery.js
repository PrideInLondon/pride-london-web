import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import OtherArticles from '.'

export const query = graphql`
  query otherArticlesQuery($id: String!) {
    allContentfulArticle(
      sort: { fields: [datePublished], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          title
          datePublished
          category
        }
      }
    }
  }
`

const OtherArticlesQuery = props => (
  <StaticQuery
    query={query}
    render={data => {
      return <OtherArticles {...props} data={data} />
    }}
  />
)

export default OtherArticlesQuery
