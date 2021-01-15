import React from 'react'
import renderer from 'react-test-renderer';
import PostList from '@/components/post-list';
import Author from '@/types/author'
import Post from '@/types/post'

describe('PostList', () => {
  it('should render PostList', () => {
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

    const posts: Post[] = [
      post,
    ];

    const component = renderer.create(
      <PostList posts={posts}/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})