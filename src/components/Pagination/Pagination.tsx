import ReactPaginate from 'react-paginate';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './Pagination.module.scss';

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
      containerClassName={styles.paginationContainer}
      activeClassName={styles.selected}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      renderOnZeroPageCount={null}
    ></ReactPaginate>
  );
};

export default Pagination;
