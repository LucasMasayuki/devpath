import React from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  content: string
}

const PostBody = ({ content }: Props): JSX.Element => (
  <Box>
    <Box class="markdown" dangerouslySetInnerHTML={{ __html: content }} />
  </Box>
)

export default PostBody
