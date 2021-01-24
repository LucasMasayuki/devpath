import React from 'react'
import renderer from 'react-test-renderer'
import AppBar from '@/components/app-bar'

describe('AppBar', () => {
  it('should render AppBar', () => {
    const component = renderer.create(<AppBar />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
