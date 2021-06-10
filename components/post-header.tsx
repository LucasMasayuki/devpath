import React from 'react'
import { Avatar, Box, Center } from '@chakra-ui/react'
import DateFormatter from '@/components/date-formatter'
import CoverImage from '@/components/cover-image'
import PostTitle from '@/components/post-title'
import Author from '@/types/author'
import PostViews from '@/components/post-views'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  views: number
}

const PostHeader = ({ title, coverImage, date, author, views }: Props): JSX.Element => (
  <>
    <Box>
      <Center>
        <Box h={250} position="relative">
          <CoverImage title={title} src={coverImage} />
        </Box>
      </Center>

      <Box pl="10%" pr="10%">
        <PostTitle>{title}</PostTitle>
        <Box d="flex" mb={4} mt={4} alignItems="center">
          <Avatar size="sm" name={author.name} src={author.picture} />
          <Box as="span" fontSize="sm" ml={3}>
            {author.name}
          </Box>
        </Box>
        <Box>
          <DateFormatter dateString={date} /> - <PostViews>{`${views >= 0 ? views : '...'} views`}</PostViews>
        </Box>
      </Box>
    </Box>
  </>
)

export default PostHeader
