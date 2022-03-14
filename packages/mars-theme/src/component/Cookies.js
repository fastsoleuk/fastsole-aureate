import { SmallCloseIcon } from '@chakra-ui/icons'
import { Box, Button, Icon, Text } from '@chakra-ui/react'
import React from 'react'

const Cookies = () => {
    return (

        <Box bg="rgba(0 0 0 / 66%)" position={"relative"}>
            <Icon as={SmallCloseIcon} w={6} h={6} color='white' position={"absolute"} right={"2"} top={"40%"} />
            <Box textAlign={"center"} display={{ base: "block", md: "flex" }} px={"8"} alignItems={"center"} justifyContent={"center"} py={"4"}>
                <Text color={"white"} mr={"2"}  >
                    We use cookies to ensure that we give you the best experience on
                    our website. If you continue to use this site we will assume that you
                    are happy with it.
                </Text>
                <Button bg={"#20c19e"} color={"white"} m={"2"}>Ok</Button>
            </Box>
        </Box>
    )
}

export default Cookies
