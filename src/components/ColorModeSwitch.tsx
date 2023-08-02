import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack>
            <Text>Dark Mode</Text>
            <Switch colorScheme='blue' onChange={toggleColorMode} isChecked={colorMode === 'dark'} />
        </HStack>
    );
};

export default ColorModeSwitch;
