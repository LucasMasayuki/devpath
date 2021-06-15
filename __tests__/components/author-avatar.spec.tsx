import React from 'react'
import renderer from 'react-test-renderer'
import Author from '@/types/author'
import AuthorAvatar from '@/components/author-avatar'

describe('AuthorAvatar', () => {
  it('should render AuthorAvatar', () => {
    const author: Author = {
      name: 'test',
      picture: 'test',
    }

    const component = renderer.create(<AuthorAvatar author={author} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
