import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import HomepageComponent from '../../gatsby-theme-minimal-blog/components/homepage'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allPost(sort: { fields: date, order: DESC }, limit: 10) {
          nodes {
            slug
            title
            date(formatString: "DD.MM.YYYY")
            excerpt
            timeToRead
            description
            tags {
              name
              slug
            }
          }
        }
      }
    `}
    render={(data) => <HomepageComponent posts={data.allPost.nodes} />}
  />
)
