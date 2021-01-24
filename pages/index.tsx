import Head from 'next/head'
import React from 'react'

import PostList from '@/components/post-list'
import AppBar from '@/components/app-bar'
import Layout from '@/components/layout'
import { getAllPosts } from '@/lib/api'
import Post from '@/types/post'

type Props = {
  allPosts: Post[]
}

type Items = {
  [key: string]: string
}

const Index = ({ allPosts }: Props): JSX.Element => {
  const posts = allPosts

  return (
    <>
      <Layout>
        <Head>
          <title>Devpath Blog</title>
        </Head>
        <AppBar />

        {posts.length > 0 && <PostList posts={posts} />}
      </Layout>
    </>
  )
}

export default Index

type StaticProps = {
  props: {
    allPosts: Items[]
  }
}

export const getStaticProps = (): StaticProps => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}
