import React from 'react'
import renderer from 'react-test-renderer';
import DrawerButton from '@/components/drawer-button';

describe('DrawerButton', () => {
  it('should render DrawerButton', () => {
    const component = renderer.create(
      <DrawerButton />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})