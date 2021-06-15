import React from 'react'
import renderer from 'react-test-renderer'
import BadgeBox from '@/components/badge-box'

describe('AuthorAvatar', () => {
  it('should render correct badge box', () => {
    const tags = ['typescript', 'devops']

    const component = renderer.create(<BadgeBox tags={tags} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
