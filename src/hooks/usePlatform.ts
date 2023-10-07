import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatform = () => useQuery({
    queryKey:["platforms"],
    queryFn: apiClient.getAll,
    staleTime:24*60*60*1000, //24h
    initialData:platforms
})

export default usePlatform