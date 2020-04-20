/** @jsx jsx */
import { jsx } from 'theme-ui'
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
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </div>
    </Layout>
  )
}

export default Homepage
