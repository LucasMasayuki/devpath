import React from 'react'
import { Avatar, Box } from '@chakra-ui/react'
import Author from '@/types/author'

type Props = {
  author: Author
}

const AuthorAvatar = ({ author }: Props): JSX.Element => (
  <Box d="flex" mb={4} mt={2} alignItems="center">
    <Avatar size="sm" name={author.name} src={author.picture} />
    <Box as="span" fontSize="sm" ml={3}>
      {author.name}
    </Box>
  </Box>
)

export default AuthorAvatar
