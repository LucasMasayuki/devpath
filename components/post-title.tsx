import React, { ReactNode } from 'react'


type Props = {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => (
  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
    {children}
  </h1>
)

export default PostTitle
