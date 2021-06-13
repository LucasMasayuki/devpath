import React from 'react'
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

const DrawerButton = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton colorScheme="inherit" aria-label="Menu" onClick={onOpen} variant="none" icon={<HamburgerIcon />} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" bgColor="primaryColor" color="white">
              DevPath
            </DrawerHeader>
            <DrawerBody bgColor="primaryColor" color="white">
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
