import React from 'react'
import { Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import PostPreview from '@/components/post-preview'
import Post from '@/types/post'

type Props = {
  posts: Post[]
}

function templateColumns(): string {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)')
  return isLargerThan992 ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'
}

const PostList = ({ posts }: Props): JSX.Element => {
  return (
    <Grid templateColumns={templateColumns()} gap={4}>
      {posts.map((post) => (
        <GridItem key={post.slug}>
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        </GridItem>
      ))}
    </Grid>
  )
}

export default PostList
