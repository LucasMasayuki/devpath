import React from 'react'
import renderer from 'react-test-renderer'
import PostBody from '@/components/post-body'

describe('PostBody', () => {
  it('should render PostBody', () => {
    const component = renderer.create(<PostBody content="<div>test</div>" />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
