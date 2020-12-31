import React from 'react'
import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  // eslint-disable-next-line react/require-default-props
  preview?: Boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <Alert preview={preview} />
      <main>{children}</main>
    </div>
    <Footer />
  </>
)

export default Layout
