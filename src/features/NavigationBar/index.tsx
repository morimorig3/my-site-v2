import {
  Box,
  Button,
  CloseButton,
  Collapse,
  Container,
  Fade,
  HStack,
  Slide,
  SlideFade,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaGithub, FaFingerprint } from 'react-icons/fa';

export const NavigationBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Container maxW={'4xl'}>
        <HStack h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Text>morimorig3</Text>
          <Spacer />
          <HStack>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <SlideFade in={isOpen} unmountOnExit={true} offsetX={30} offsetY={0}>
              <HStack>
                <Button>
                  <FaGithub size={'20px'} />
                </Button>
                <Button>
                  <FaGithub size={'20px'} />
                </Button>
              </HStack>
            </SlideFade>
            <Button onClick={onToggle}>
              <FaFingerprint size={'20px'} />
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};
