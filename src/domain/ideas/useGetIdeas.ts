import { useEffect, useState } from "react";
import { IdeasRequestParams, IdeasResponse, SortOptions } from "./entity";
import { getIdeas } from "./service";
import useQueryParams from "./useQueryParams";

type UseGetIdeasParams = {
  onSuccessfulFetch?: (data: IdeasResponse["data"]) => void;
};

const useGetIdeas = (props?: UseGetIdeasParams) => {
  const { params, setQueryParams } = useQueryParams();
  const [pageOptions, setPageOptions] = useState(1);
  const [loading, setIsloading] = useState(true);
  const [ideas, setIdeas] = useState<IdeasResponse["data"]>([]);
  const [total, setTotal] = useState(0);

  const pageSizeOptions: Array<IdeasRequestParams["limit"]> = [10, 20, 50];
  const sortOptions: Array<SortOptions> = ["published_at", "-published_at"];

  const handleSetOptions = (limit: IdeasRequestParams["limit"]) => {
    setQueryParams({
      ...params,
      limit,
    });
  };

  const handleSetSort = (sort: IdeasRequestParams["sort"]) => {
    setQueryParams({
      ...params,
      sort,
    });
  };

  const handleSetPage = (page: IdeasRequestParams["page"]) => {
    setQueryParams({
      ...params,
      page,
    });
  };

  useEffect(() => {
    setIsloading(true);
    getIdeas(params).then((response) => {
      setIdeas(response.data.data);
      setIsloading(false);
      setPageOptions(response.data.meta.last_page);
      setTotal(response.data.meta.total);
      props?.onSuccessfulFetch?.(response.data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return {
    params,
    ideas,
    loading,
    pageSizeOptions,
    pageOptions,
    sortOptions,
    currentPage: params.page ?? 1,
    total,
    handleSetOptions,
    handleSetSort,
    handleSetPage,
  };
};

export default useGetIdeas;
