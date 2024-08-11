import axios from "axios";
import { IdeasRequestParams, IdeasResponse } from "./entity";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

const getIdeas = async (params: IdeasRequestParams) => {
  if (!BASE_URL) {
    throw new Error("VITE_BASE_API_URL is not defined");
  }
  const path = "/api/ideas";
  return await axios.get<IdeasResponse>(
    import.meta.env.VITE_BASE_API_URL + path,
    {
      params: {
        "page[size]": params.limit,
        "page[number]": params.page,
        sort: params.sort,
        // hardcoded for now
        append: ["small_image", "medium_image"],
      },
    }
  );
};

export { getIdeas };
