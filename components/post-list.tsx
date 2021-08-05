import React from 'react'
import { Grid } from '@chakra-ui/react'
import PostPreview from '@/components/post-preview'
import Post from '@/types/post'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props): JSX.Element => {
  return (
    <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          tags={post.tags}
        />
      ))}
    </Grid>
  )
}

export default PostList
