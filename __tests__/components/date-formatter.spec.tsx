import React from 'react'
import renderer from 'react-test-renderer';
import DateFormatter from '@/components/date-formatter';

describe('DateFormatter', () => {
  it('should render formatted time', () => {
    const date = '1999-03-01'
    const component = renderer.create(
      <DateFormatter dateString={date} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})