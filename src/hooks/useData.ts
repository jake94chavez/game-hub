import apiClient from "@/services/api-client";
import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        console.log("Fetching data from endpoint:", endpoint);
        console.log("Request config:", requestConfig);
        console.log("Dependencies:", deps);
        const controller = new AbortController();

        setIsLoading(true);
        apiClient
          .get<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig
          })
          .then((res) => {
            setData(res.data.results)
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
    }, deps ? [...deps] : []);

    return { data, error, isLoading };
}

export default useData;