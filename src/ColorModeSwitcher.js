import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

 const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="lg"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      position={'fixed'}
      top={'5'}
      right={'6'}
      variant="ghost"
      color="#fff"
      marginLeft="2"
      zIndex={20}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher