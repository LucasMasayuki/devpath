import React from 'react'
import renderer from 'react-test-renderer'
import Index from '@/pages/index'
import { getStaticProps } from '@/pages/index'
import Author from '@/types/author'
import Post from '@/types/post'

describe('Index', () => {
  it('should render Index', () => {
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
      author,
      excerpt: 'test',
      ogImage: {
        url: 'test',
      },
    }

    const posts: Post[] = [post]

    const component = renderer.create(<Index allPosts={posts} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should get static props', async () => {
    const staticProps = await getStaticProps()
    expect(staticProps.props.allPosts.push.length).not.toEqual(0)
  })
})
