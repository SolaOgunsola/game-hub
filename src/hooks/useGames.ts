import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, seterror] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then((response) => setGames(response.data.results))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                seterror(error.message);
            });

        return () => controller.abort();
    }, []);

    return { games, error };
};

export default useGames;
