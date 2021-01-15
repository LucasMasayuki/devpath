import React from 'react'
import renderer from 'react-test-renderer';
import CoverImage from '@/components/cover-image';

describe('CoverImage', () => {
  it('should render CoverImage', () => {
    const component = renderer.create(
      <CoverImage src='test' title='test'/>,
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})