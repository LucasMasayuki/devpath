import { Link, Image } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

type Props = {
  title: string
  src: string
  // eslint-disable-next-line react/require-default-props
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props): JSX.Element =>
  slug ? (
    <NextLink href="/..." as={`/posts/${slug}`} passHref>
      <Link to="/posts/[slug]">
        <Image loading="lazy" src={src} alt={`Cover Image for ${title}`} h="100%" w="100%" />
      </Link>
    </NextLink>
  ) : (
    <Image loading="lazy" fit="fill" src={src} alt={`Cover Image for ${title}`} h="100%" w="100%" />
  )

export default CoverImage
