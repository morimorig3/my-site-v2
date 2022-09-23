import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const AppProviders = ({ children }: Props) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
