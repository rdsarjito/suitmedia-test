import { useMemo } from "react";

const usePagination = (
  onChange: (page: number) => void,
  total: number,
  current: number,
  limit = 5
) => {
  const pages = useMemo(() => {
    const pages_ = Array.from({ length: total }, (_, i) => i + 1);
    if (pages_.length <= limit) {
      return pages_;
    }
    // hide pages
    return pages_.filter((d) => {
      if (current < 3) {
        return d <= limit;
      }
      if (current > total - 2) {
        return d > total - limit;
      }
      return d >= current - 2 && d <= current + 2;
    });
  }, [current, total, limit]);

  const isFirst = current === 1;
  const isLast = current === total;

  const isPageActive = (page: number) => current === page;

  const handlePrev = () => {
    if (current > 1) {
      onChange(current - 1);
    }
  };
  const handleNext = () => {
    if (current < total) {
      onChange(current + 1);
    }
  };
  const handleFirst = () => {
    if (current > 1) {
      onChange(1);
    }
  };
  const handleLast = () => {
    if (current < total) {
      onChange(total);
    }
  };
  return {
    pages,
    isLast,
    isFirst,
    isPageActive,
    handlePrev,
    handleNext,
    handleFirst,
    handleLast,
  };
};

export { usePagination };
