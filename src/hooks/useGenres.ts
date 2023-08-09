import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setgenres] = useState<Genre[]>([]);
    const [error, seterror] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true);
        apiClient
            .get<FetchGenresResponse>('/genres', { signal: controller.signal })
            .then((response) => {
                setgenres(response.data.results);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                seterror(error.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { genres, error, isLoading };

}

export default useGenres;