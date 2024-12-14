import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  const maxVisiblePages = 5;

  const getPageNumbers = () => {
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - 1, 1);
    const rightSiblingIndex = Math.min(currentPage + 1, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3;
      const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
      return [...leftRange, "DOTS", totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3;
      const rightRange = Array.from(
        { length: rightItemCount },
        (_, i) => totalPages - 2 + i
      );
      return [1, "DOTS", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = [leftSiblingIndex, currentPage, rightSiblingIndex];
      return [1, "DOTS", ...middleRange, "DOTS", totalPages];
    }
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {getPageNumbers()?.map((pageNumber, index) =>
        pageNumber === "DOTS" ? (
          <Button key={index} variant="ghost" disabled>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            key={index}
            variant={currentPage === pageNumber ? "default" : "outline"}
            className={currentPage === pageNumber ? "bg-[#002B5B]" : ""}
            onClick={() =>
              typeof pageNumber === "number" && setCurrentPage(pageNumber)
            }
          >
            {pageNumber}
          </Button>
        )
      )}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
