import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Genre {
    id: number
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient
          .get<FetchGenresResponse>("/genres")
          .then((res) => {
            setGenres(res.data.results)
            setIsLoading(false);
          })
            .catch((err) => {
                if (err.name === "CanceledError") return;
                setError(err.message);
                setIsLoading(false);
            });

        return () => {
            controller.abort();
        };
    }, []);

    return { genres, error, isLoading };
}

export default useGenres;