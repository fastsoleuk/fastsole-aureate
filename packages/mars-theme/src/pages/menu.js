import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    HStack,
    Button,

} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons';

function Menudemo() {
    return (

        <>
            <HStack justifyContent="center" >
                <Menu>
                    <MenuButton   >
                        Browse all Brand <ChevronDownIcon />
                    </MenuButton>
                    <MenuList display={"flex"}>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>

                        <MenuGroup title="Help">
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>

                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton   >
                        About us <ChevronDownIcon />
                    </MenuButton>
                    <MenuList display={"flex"}>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>

                        <MenuGroup title="Help">
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>

                    </MenuList>
                </Menu>

                <Menu>
                    <MenuButton as={Button} >
                        Release Dates <ChevronDownIcon />
                    </MenuButton>
                    <MenuList display={"flex"}>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>

                        <MenuGroup title="Help">
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                            <MenuItem>Payments </MenuItem>
                        </MenuGroup>

                    </MenuList>
                </Menu>
            </HStack>

            <Grid templateColumns={{ md: "2fr 5fr", sm: "repeat(2, 1fr)" }} textColor="white" gap={2}>
                <Box>
                    <Stack color="black" >
                        <Box>
                            {/* <Logo color={useColorModeValue('gray.700', 'white')} /> */}
                            <Link href="/" _focus={{ boxShadow: 'none' }} display={{ base: 'block', md: 'inline-flex' }}>
                                <Img
                                    // boxSize="50px"
                                    objectFit="contain"
                                    src={Logo}
                                    w="100% !important"
                                    h="30px !important"

                                />

                            </Link>
                        </Box>

                        <Box my={5} >
                            <Flex alignItems="baseline" mt={2}>
                                <Icon as={FaMapMarkerAlt} mr={1} /> <Text fontSize={'sm'} fontFamily="Assistant ,sans-serif">184 Main Rd E, St Albans
                                    VIC 3021, Australia </Text>
                            </Flex>

                            <Flex alignItems="baseline" mt={2}>
                                <Icon as={EmailIcon} mr={1} /> <Text fontSize={'sm'} fontFamily="Assistant ,sans-serif">contact@company.com
                                </Text>
                            </Flex>

                            <Flex alignItems="baseline" mt={2}>
                                <Icon as={PhoneIcon} mr={1} /> <Text fontSize={'sm'} fontFamily="Assistant ,sans-serif">contact@company.com
                                </Text>
                            </Flex>

                        </Box>

                        <Flex>
                            <Icon as={FaFacebookSquare} boxSize={5} />
                            <Icon as={FaTwitterSquare} boxSize={5} />
                            <Icon as={FaLinkedin} boxSize={5} />
                            <Icon as={FaInstagramSquare} boxSize={5} />
                        </Flex>
                    </Stack>
                </Box>
                <Box  >
                    <Grid templateColumns={{ md: "1fr 1fr 1fr 1fr", base: "repeat(2, 1fr)" }} textColor="white" gap={2}>
                        <Box  >
                            <ListHeader fontFamily="Assistant ,sans-serif">Information</ListHeader>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Overview</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Features</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Tutorials</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Pricing</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Releases</Link>
                        </Box>
                        <Box  >
                            <ListHeader fontFamily="Assistant ,sans-serif">Information</ListHeader>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Overview</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Features</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Tutorials</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Pricing</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Releases</Link>
                        </Box>
                        <Box  >
                            <ListHeader fontFamily="Assistant ,sans-serif">Information</ListHeader>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Overview</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Features</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Tutorials</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Pricing</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Releases</Link>
                        </Box>
                        <Box  >
                            <ListHeader fontFamily="Assistant ,sans-serif">Information</ListHeader>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Overview</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Features</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Tutorials</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Pricing</Link>
                            <Link href={'#'} fontFamily="Assistant ,sans-serif">Releases</Link>
                        </Box>
                    </Grid>
                </Box>

            </Grid>
        </>

    )
}

export default Menudemo;
