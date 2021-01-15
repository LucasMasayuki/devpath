import React from 'react'

import renderer from 'react-test-renderer';
import PostPage from '@/pages/posts/[slug]'
import { getStaticProps, getStaticPaths } from '@/pages/posts/[slug]'
import Author from '@/types/author';
import Post from '@/types/post'

jest.mock('@/lib/fetcher');
jest.mock('@/lib/markdownToHtml');

jest.mock("next/router", () => ({
  useRouter() {
      return {
          route: "/",
          pathname: "",
          query: "",
          asPath: "",
      };
  },
}));

describe('Post', () => {
  it('should render Post page', () => {
    
    const author: Author = {
      name: 'test',
      picture: 'test',
    }

    const post: Post = {
      content: 'test',
      slug: '',
      title: 'test',
      coverImage: 'test.com',
      date: '1996-10-02',
      author: author,
      excerpt: 'test',
      ogImage: {
        url: 'test'
      },
    }

    const component = renderer.create(
      <PostPage post={post}/>,
    )
  
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should get static props', async () => {
    const staticProps = await getStaticProps({
      params: {
        slug: 'preview'
      }
    })
  
    const post = staticProps.props.post
    expect(post.content).toBeUndefined()
  })

  it('should get static paths', async () => {
    const staticPaths = await getStaticPaths()
    expect(staticPaths.fallback).toBeFalsy()
    expect(staticPaths.paths.length).toBeGreaterThan(0)
  })
})