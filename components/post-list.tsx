import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import PostPreview from '@/components/post-preview'
import Post from '@/types/post'
import isDesktop from '@/lib/responsiveHelper'

type Props = {
  posts: Post[]
}

function templateColumns(): string {
  return isDesktop() ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)'
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
