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

const Index = ({ allPosts }: Props) => {
  const posts = allPosts

  return (
    <>
      <Layout>
        <Head>
          <title>
              Devpath Blog
          </title>
        </Head>
        <AppBar />
  
        {posts.length > 0 && <PostList posts={posts} />}
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
