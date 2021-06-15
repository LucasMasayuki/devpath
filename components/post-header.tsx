import React from 'react'
import { Box, Center } from '@chakra-ui/react'
import DateFormatter from '@/components/date-formatter'
import CoverImage from '@/components/cover-image'
import PostTitle from '@/components/post-title'
import Author from '@/types/author'
import PostViews from '@/components/post-views'
import BadgeBox from './badge-box'
import AuthorAvatar from './author-avatar'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  views: number
  tags: Array<string>
}

const PostHeader = ({ title, coverImage, date, author, views, tags }: Props): JSX.Element => (
  <>
    <Box>
      <Center mt={10} mb={10}>
        <Box h={250} w={{ base: '100%', lg: '70%' }} position="relative">
          <CoverImage title={title} src={coverImage} />
        </Box>
      </Center>

      <Box pl="10%" pr="10%">
        <PostTitle>{title}</PostTitle>
        <BadgeBox tags={tags} />
        <AuthorAvatar author={author} />
        <Box mt="1">
          <DateFormatter dateString={date} /> - <PostViews>{`${views >= 0 ? views : '...'} views`}</PostViews>
        </Box>
      </Box>
    </Box>
  </>
)

export default PostHeader
