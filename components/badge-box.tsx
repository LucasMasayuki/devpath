import React from 'react'
import { Badge, Box } from '@chakra-ui/react'

type Props = {
  tags: Array<string>
}

const BadgeBox = ({ tags }: Props): JSX.Element => {
  return (
    <Box d="flex" mt="3" mb="3">
      {tags.map((tagName: string) => (
        <Badge key={tagName} bgColor={tagName} borderRadius="8px" mr="2">
          {tagName}
        </Badge>
      ))}
    </Box>
  )
}

export default BadgeBox
