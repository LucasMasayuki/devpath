import React, { ReactNode } from 'react'
import { ViewIcon } from '@chakra-ui/icons'

type Props = {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode
}

const PostViews = ({ children }: Props): JSX.Element => (
  <>
    <ViewIcon color="white" mr="2" />
    <small>{children}</small>
  </>
)

export default PostViews
