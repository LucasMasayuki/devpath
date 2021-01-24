import React from 'react'
import renderer from 'react-test-renderer'
import Layout from '@/components/layout'

describe('Footer', () => {
  it('should render Footer', () => {
    const component = renderer.create(
      <Layout>
        <div />
      </Layout>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
