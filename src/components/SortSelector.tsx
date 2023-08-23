import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By:
            </MenuButton>
            <MenuList>
                <MenuItem>Rating</MenuItem>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Dummy</MenuItem>
                <MenuItem>Dummy2</MenuItem>
                <MenuItem>Dummy3</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default SortSelector