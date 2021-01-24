import React, { ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

type Props = {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode
}

const PostTitle = ({ children }: Props): JSX.Element => (
  <Heading mt="1" fontWeight="bold" as="h1" lineHeight="tight">
    {children}
  </Heading>
)

export default PostTitle
