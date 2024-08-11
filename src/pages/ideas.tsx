import HeroBanner from "../ui/hero_banner";
import MainLayout from "../ui/layout";
import useGetIdeas from "../domain/ideas/useGetIdeas";
import Pagination from "../ui/pagination";
import placeholder from "../assets/placeholder.png";
import { SortOptions } from "../domain/ideas/entity";

import "./pages.style.scss";
import Card from "../ui/card";

const Ideas = () => {
  const {
    params,
    ideas,
    total,
    loading,
    pageSizeOptions,
    sortOptions,
    pageOptions,
    currentPage,
    handleSetOptions,
    handleSetSort,
    handleSetPage,
  } = useGetIdeas({
    onSuccessfulFetch: () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  });

  const sortLabel = (sort: SortOptions) => {
    switch (sort) {
      case "published_at":
        return "Newest";
      case "-published_at":
        return "Oldest";
      default:
        return "--unknown--";
    }
  };

  return (
    <MainLayout title="Ideas">
      <HeroBanner
        title="Ideas"
        description="Where all our great things begin"
        image="https://c8.alamy.com/comp/FDE960/hand-drawn-business-ideas-sketch-against-white-background-FDE960.jpg"
      />
      <section className="container">
        <div className="control_bar">
          <div className="info_bar">
            <p>
              Showing 1 - {ideas.length} of {total}
            </p>
          </div>
          <div className="filter_bar">
            <div className="select_container">
              <label htmlFor="page_limit">Show per page:</label>
              <select
                value={params.limit}
                id="page_limit"
                onChange={(event) => {
                  handleSetOptions(Number(event.target.value));
                }}
              >
                {pageSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="select_container">
              <label htmlFor="sort">Sort by:</label>
              <select
                value={params.sort}
                id="sort"
                onChange={(event) => {
                  handleSetSort(event.target.value as SortOptions);
                }}
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {sortLabel(option)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {loading && <h1>Loading...</h1>}
        <section className="grid">
          {ideas.map((idea) => (
            <Card
              key={idea.id}
              title={idea.title}
              image={idea?.small_image?.[0]?.url ?? placeholder}
              date={idea.published_at}
            />
          ))}
        </section>
        <Pagination
          total={pageOptions}
          current={currentPage}
          onChange={handleSetPage}
        />
      </section>
    </MainLayout>
  );
};

export default Ideas;
