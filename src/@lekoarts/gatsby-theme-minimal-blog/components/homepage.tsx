/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from './layout'
import Listing from './listing'
import useMinimalBlogConfig from '../hooks/use-minimal-blog-config'
import replaceSlashes from '../utils/replaceSlashes'

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <Listing posts={posts} showTags={false} />
      <div css={{ fontSize: '1.2rem', textAlign: 'right' }}>
        <Styled.a
          as={Link}
          to={replaceSlashes(`/${basePath}/${blogPath}`)}
          sx={{ fontSize: [1, 2, 3], color: `text` }}
        >
          Read all posts
        </Styled.a>
      </div>
    </Layout>
  )
}

export default Homepage
