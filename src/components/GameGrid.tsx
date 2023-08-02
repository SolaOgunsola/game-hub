import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, seterror] = useState('');

    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>('/games')
            .then((response) => setGames(response.data.results))
            .catch((error) => seterror(error.message));
    });

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;
