import React from 'react'
import renderer from 'react-test-renderer'
import Meta from '@/components/meta'

describe('Footer', () => {
  it('should render Footer', () => {
    const component = renderer.create(<Meta />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
