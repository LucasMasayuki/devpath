import React, { ReactNode } from 'react'


type Props = {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode;
};

const PostViews = ({ children }: Props) => <small className="text-lg">{children}</small>

export default PostViews