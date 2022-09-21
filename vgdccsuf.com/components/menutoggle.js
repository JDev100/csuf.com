import React from "react"
import { Box } from "@chakra-ui/react"
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
    </Box>
  )
}

export default MenuToggle