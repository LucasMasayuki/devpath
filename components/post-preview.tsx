import Link from 'next/link'
import React from 'react'
import {
  Avatar,
  Box,
  Link as ChakraLink,
  Text,
  HStack,
  Spacer,
  Flex,
  Heading,
} from '@chakra-ui/react'

import DateFormatter from '@/components/date-formatter'
import CoverImage from '@/components/cover-image'
import PostViews from '@/components/post-views'
import Author from '@/types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  
  // const { data } = useFetch(`/api/page-views-preview?id=${slug}`, true)

  // const views = data?.total
  const views = 0

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bgGradient="linear(to-r, #EB3349, #F45C43)"
      shadow="1px 1px #b7b7b7"
      color="white"
      m={4}
    >
      <Box h={200} w="100%" position="relative">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </Box>
      <Box p="6">
        <Flex direction="column">
          <Box>
            <Heading
              mt="1"
              fontWeight="semibold"
              as="h3"
              lineHeight="tight"
            >
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <ChakraLink>{title}</ChakraLink>
              </Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <HStack spacing="8px">
              <Avatar size="sm" name={author.name} src={author.picture} />
              <Box as="span" fontSize="sm">
                {author.name}
              </Box>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <DateFormatter dateString={date} /> -{' '}
            <PostViews>{`${views >= 0 ? views : '...'} views`}</PostViews>
          </Box>
          <Spacer />
          <Box>
            <Text noOfLines={3} isTruncated>{excerpt}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default PostPreview