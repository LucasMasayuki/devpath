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
import { APP_NAME } from '@/lib/constants'

const DrawerButton = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton colorScheme="inherit" aria-label="Menu" onClick={onOpen} variant="none" icon={<HamburgerIcon />} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px" bgColor="secondaryDarkColor" color="white">
              {APP_NAME}
            </DrawerHeader>
            <DrawerBody bgColor="secondaryDarkColor" color="white">
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
