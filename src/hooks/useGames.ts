import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true);
        apiClient
          .get<FetchGamesResponse>("/games")
          .then((res) => {
            setGames(res.data.results)
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

    return { games, error, isLoading };
}

export default useGames;