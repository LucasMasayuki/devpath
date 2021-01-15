import React from 'react'
import { Avatar, Box } from '@chakra-ui/react'
import DateFormatter from '@/components/date-formatter'
import CoverImage from '@/components/cover-image'
import PostTitle from '@/components/post-title'
import Author from '@/types/author'
import PostViews from '@/components/post-views'

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  views: number;
};

const PostHeader = ({ title, coverImage, date, author, views }: Props) => (
  <>
    <Box pl={6} pr={6}>
      <PostTitle>{title}</PostTitle>
      <Box h={400} w="100%" position="relative">
        <CoverImage title={title} src={coverImage} />
      </Box>
      <Box>
        <Box mb={4}>
          <DateFormatter dateString={date} /> -{' '}
          <PostViews>{`${views >= 0 ? views : '...'} views`}</PostViews>
        </Box>
        <Box>
          <Avatar size="sm" name={author.name} src={author.picture} />
        </Box>
      </Box>
    </Box>
  </>
)

export default PostHeader