import React from 'react'
import renderer from 'react-test-renderer'
import PostPreview from '@/components/post-preview'
import Author from '@/types/author'
import Post from '@/types/post'

describe('PostPreview', () => {
  it('should render PostPreview', () => {
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

    const component = renderer.create(
      <PostPreview
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        excerpt={post.excerpt}
        author={post.author}
        slug={post.slug}
      />,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
