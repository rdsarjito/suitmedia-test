import "./index.style.scss";
import { usePagination } from "./usePagination";

const Pagination = ({
  total,
  current,
  onChange,
}: {
  total: number;
  current: number;
  onChange: (page: number) => void;
}) => {
  const {
    pages,
    isFirst,
    isLast,
    isPageActive,
    handleFirst,
    handlePrev,
    handleLast,
    handleNext,
  } = usePagination(onChange, total, current);

  return (
    <ul className="pagination">
      <li>
        <button disabled={isFirst} onClick={handleFirst}>
          First
        </button>
      </li>
      <li>
        <button disabled={isFirst} onClick={handlePrev}>
          Previous
        </button>
      </li>
      {pages.map((page) => (
        <li key={page} className={isPageActive(page) ? "active" : ""}>
          <button onClick={() => onChange(page)}>{page}</button>
        </li>
      ))}
      <li>
        <button onClick={handleNext} disabled={isLast}>
          Next
        </button>
      </li>
      <li>
        <button onClick={handleLast} disabled={isLast}>
          Last
        </button>
      </li>
    </ul>
  );
};
export default Pagination;
