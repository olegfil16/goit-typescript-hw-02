import axios from "axios";
import { ApiResponse } from "./types";

const CLIENT_ID = "2bCBi5euBtlvj89IVXpTML-XjVonacitJlDF5GhSZM0";
axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = `Client-ID ${CLIENT_ID}`;
axios.defaults.params = {
  per_page: 12,
};

export const fetchPhotos = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const { data } = await axios.get<ApiResponse>(`/search/photos`, {
    params: { query, page },
  });

  return data;
};
