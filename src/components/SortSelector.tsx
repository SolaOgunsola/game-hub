import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SortSelector = () => {
    const setSelectedSortOrder = useGameQueryStore(s => s.setSortOrder);
    const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);

    const sortOrders = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ];

    const currentSortOrder = sortOrders.find(order => order.value === selectedSortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map(sortOrder => (
                    <MenuItem
                        key={sortOrder.value}
                        value={sortOrder.value}
                        onClick={() => setSelectedSortOrder(sortOrder.value)}
                    >
                        {sortOrder.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
