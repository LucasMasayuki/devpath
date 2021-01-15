import React from 'react'
import renderer from 'react-test-renderer';
import Layout from '@/components/layout';

describe('Footer', () => {
  it('should render Footer', () => {
    const component = renderer.create(
      <Layout>
        <div></div>
      </Layout>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})