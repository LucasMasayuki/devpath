import React from 'react'
import Footer from '@/components/footer'
import Meta from '@/components/meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <Meta />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
