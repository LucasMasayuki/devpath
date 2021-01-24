import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '@/components/footer'

describe('Footer', () => {
  it('should render Footer', () => {
    const component = renderer.create(<Footer />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
