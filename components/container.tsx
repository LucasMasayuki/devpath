import React, { ReactNode, FunctionComponent } from 'react'


type Props = {
  // eslint-disable-next-line react/require-default-props
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => <div className="container mx-auto px-5">{children}</div>

export default Container
