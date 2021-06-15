import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import React from 'react'

import { Box } from '@chakra-ui/react'
import PostBody from '@/components/post-body'
// import useFetch from '@/lib/fetcher'

import AppBar from '@/components/app-bar'
import Layout from '@/components/layout'
import { getPostBySlug, getAllPosts } from '@/lib/api'
import PostTitle from '@/components/post-title'
import markdownToHtml from '@/lib/markdownToHtml'
import PostType from '@/types/post'
import PostHeader from '@/components/post-header'

type Props = {
  post: PostType
}

type Params = {
  params: {
    slug: string
  }
}

type StaticPaths = {
  paths: {
    params: {
      slug: string
    }
  }[]
  fallback: boolean
}

type StaticProps = {
  props: {
    post: {
      content: string
    }
  }
}

// eslint-disable-next-line no-unused-vars
const Post = ({ post }: Props): JSX.Element => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  // const { data } = useFetch(`/api/page-views?id=${post.slug}`)

  return (
    <Layout>
      <Box>
        <AppBar />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Box mb={20}>
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                // views={data?.total}
                views={1}
                tags={post.tags}
              />
              <PostBody content={post.content} />
            </Box>
          </>
        )}
      </Box>
    </Layout>
  )
}

export default Post

export async function getStaticProps({ params }: Params): Promise<StaticProps> {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'tags',
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export function getStaticPaths(): StaticPaths {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}
