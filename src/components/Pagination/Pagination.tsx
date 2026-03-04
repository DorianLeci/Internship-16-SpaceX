import ReactPaginate from 'react-paginate';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedPage: number) => void;
}
const Pagination = ({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  return (
    <ReactPaginate
      previousLabel={<FaArrowLeft />}
      nextLabel={<FaArrowRight />}
      pageCount={pageCount}
      forcePage={currentPage - 1}
      onPageChange={(selectedItem) => onPageChange(selectedItem.selected + 1)}
    ></ReactPaginate>
  );
};

export default Pagination;
