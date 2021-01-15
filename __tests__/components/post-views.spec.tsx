import React from 'react'
import renderer from 'react-test-renderer';
import PostViews from '@/components/post-views';

describe('PostViews', () => {
  it('should render PostViews', () => {
    const component = renderer.create(
      <PostViews>
        <div>title</div>
      </PostViews>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})