import Link from 'next/link'
import React from 'react'
import { Box, Link as ChakraLink, Text, Flex, Heading, Spacer } from '@chakra-ui/react'

import DateFormatter from '@/components/date-formatter'
import CoverImage from '@/components/cover-image'
import PostViews from '@/components/post-views'
import Author from '@/types/author'
import AuthorAvatar from './author-avatar'
import BadgeBox from './badge-box'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  tags: Array<string>
}

const PostPreview = ({ title, coverImage, date, excerpt, author, slug, tags }: Props): JSX.Element => {
  // const { data } = useFetch(`/api/page-views-preview?id=${slug}`, true)

  // const views = data?.total
  const views = 0

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="secondaryDarkColor"
      boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
      color="white"
      m={4}
    >
      <Box h={180} w="100%" position="relative">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </Box>
      <Box p="6">
        <Flex direction="column">
          <Box>
            <Heading mt="1" fontWeight="semibold" as="h3" lineHeight="tight">
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <ChakraLink>{title}</ChakraLink>
              </Link>
            </Heading>
          </Box>
          <BadgeBox tags={tags} />
          <Spacer />
          <AuthorAvatar author={author} />
          <Box mt="1">
            <DateFormatter dateString={date} /> - <PostViews>{`${views >= 0 ? views : '...'} views`}</PostViews>
          </Box>
          <Box mt="4">
            <Text noOfLines={3} isTruncated whiteSpace="normal">
              {excerpt}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default PostPreview
