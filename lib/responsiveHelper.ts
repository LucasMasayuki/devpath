import { useMediaQuery } from '@chakra-ui/react'

const isDesktop = (): boolean => {
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)')
  return isLargerThan992
}

export default isDesktop
