import React from 'react'
import renderer from 'react-test-renderer'
import PostTitle from '@/components/post-title'

describe('PostTitle', () => {
  it('should render PostTitle', () => {
    const component = renderer.create(
      <PostTitle>
        <div>title</div>
      </PostTitle>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
