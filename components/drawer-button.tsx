import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'

const DrawerButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton colorScheme="inherit" aria-label="Menu" onClick={onOpen} variant="none" icon={<HamburgerIcon />} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" bgGradient="linear(to-r, #EB3349, #F45C43)" color="white">
              DevPath
            </DrawerHeader>
            <DrawerBody bgGradient="linear(to-r, #EB3349, #F45C43)" color="white">
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
