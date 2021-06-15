import React from 'react'
import renderer from 'react-test-renderer'
import PostHeader from '@/components/post-header'
import Author from '@/types/author'

describe('PostHeader', () => {
  it('should render PostHeader', () => {
    const author: Author = {
      name: 'test',
      picture: 'test',
    }

    const component = renderer.create(
      <PostHeader title="test" coverImage="test" date="2019-01-01" author={author} views={1} tags={['typescript']} />,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
