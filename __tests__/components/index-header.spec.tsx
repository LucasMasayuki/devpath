import React from 'react'
import renderer from 'react-test-renderer'
import IndexHeader from '@/components/index-header'

describe('IndexHeader', () => {
  it('should render index header', () => {
    const component = renderer.create(<IndexHeader />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
