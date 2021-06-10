import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type Props = {
  title: string
  src: string
  // eslint-disable-next-line react/require-default-props
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props): JSX.Element =>
  slug ? (
    <Link as={`/posts/${slug}`} href="/posts/[slug]" passHref>
      <Image layout="fill" src={src} alt={`Cover Image for ${title}`} />
    </Link>
  ) : (
    <Image layout="fill" src={src} alt={`Cover Image for ${title}`} />
  )

export default CoverImage
