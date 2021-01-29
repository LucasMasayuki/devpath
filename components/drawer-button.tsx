import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HamburgerIcon } from '@chakra-ui/icons'
import { BG_GRADIENT_COLOR } from '@/lib/constants'
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'

const DrawerButton = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton colorScheme="inherit" aria-label="Menu" onClick={onOpen} variant="none" icon={<HamburgerIcon />} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" bgGradient={BG_GRADIENT_COLOR} color="white">
              DevPath
            </DrawerHeader>
            <DrawerBody bgGradient={BG_GRADIENT_COLOR} color="white">
              <p>Home</p>
              <p>About author</p>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default DrawerButton
