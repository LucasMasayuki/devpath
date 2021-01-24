import React from 'react'
import { Flex } from '@chakra-ui/react'
import PostPreview from '@/components/post-preview'
import Post from '@/types/post'

type Props = {
  posts: Post[]
}

const PostList = ({ posts }: Props): JSX.Element => (
  <Flex direction="column">
    {posts.map((post) => (
      <PostPreview
        key={post.slug}
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
        slug={post.slug}
        excerpt={post.excerpt}
      />
    ))}
  </Flex>
)

export default PostList
