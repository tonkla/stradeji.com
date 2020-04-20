import React from 'react'
import { graphql } from 'gatsby'
import HomepageComponent from '../../gatsby-theme-minimal-blog/components/homepage'

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }, limit: 10) {
      nodes {
        slug
        title
        date(formatString: "DD.MM.YYYY")
        tags {
          name
          slug
        }
      }
    }
  }
`

export default ({ data }) => {
  return <HomepageComponent posts={data.allPost.nodes} />
}
