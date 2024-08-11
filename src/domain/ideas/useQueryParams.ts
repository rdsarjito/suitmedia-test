import { useEffect, useMemo } from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { IdeasRequestParams } from "./entity";

const keys = {
  page: "page",
  limit: "limit",
  sort: "sort",
};

const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params: IdeasRequestParams = useMemo(() => {
    return {
      page: parseInt(
        searchParams.get(keys.page) ?? "1"
      ) as IdeasRequestParams["page"],
      limit: parseInt(
        searchParams.get(keys.limit) ?? "10"
      ) as IdeasRequestParams["limit"],
      sort: (searchParams.get(keys.sort) ??
        "published_at") as IdeasRequestParams["sort"],
    };
  }, [searchParams]);

  const setQueryParams = (filter: Partial<IdeasRequestParams>) => {
    const params_: IdeasRequestParams = {
      ...params,
      ...filter,
    };

    const search_ = Object.keys(params).reduce((all, keyItem) => {
      const item = params_[keyItem as keyof IdeasRequestParams];
      if (!item) {
        return all;
      }
      return {
        ...all,
        [keyItem]: Array.isArray(item) ? item : `${item}`,
      };
    }, {} as Record<string, string | string[]>);

    setSearchParams(createSearchParams(search_));
  };

  useEffect(() => {
    setQueryParams(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.limit, params.page, params.sort]);

  return {
    params,
    setQueryParams,
  };
};

export default useQueryParams;
