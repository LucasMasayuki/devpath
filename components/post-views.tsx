import React, { ReactNode } from 'react'
import { ViewIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'

type Props = {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
};

const PostViews = ({ children }: Props) => (
  <>
    <ViewIcon color="white" mr="2"/>
    <small>{children}</small>
  </>
)

export default PostViews