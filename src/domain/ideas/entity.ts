type IdeasItemResponse = {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  small_image?: Array<Image>;
  medium_image?: Array<Image>;
};

type AppendType = "small_image" | "medium_image";
export type SortOptions = "published_at" | "-published_at";

export type IdeasRequestParams = {
  limit?: number;
  page?: number;
  append?: Array<AppendType>;
  sort?: SortOptions;
};

type MetaLinks = {
  url: string | null;
  label: string;
  active: boolean;
};

type Image = {
  id: number;
  mime: string;
  file_name: string;
  url: string;
};

export type IdeasResponse = {
  data: Array<IdeasItemResponse>;
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: MetaLinks[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};
