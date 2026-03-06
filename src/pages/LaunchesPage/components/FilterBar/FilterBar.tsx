import { Filter } from '@app-types/Filter';
import styles from './FilterBar.module.scss';

interface FilterBarOptions {
  onFilterChange: (filterValue: Filter | undefined) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarOptions) => {
  return (
    <div className={styles.filterBar}>
      <button
        className={styles.filterButton}
        onClick={() => onFilterChange(undefined)}
      >
        All
      </button>
      <button
        className={styles.filterButton}
        onClick={() => onFilterChange(Filter.SUCCESS)}
      >
        Success
      </button>
      <button
        className={styles.filterButton}
        onClick={() => onFilterChange(Filter.FAILURE)}
      >
        Failure
      </button>
      <button
        className={styles.filterButton}
        onClick={() => onFilterChange(Filter.UPCOMING)}
      >
        Upcoming
      </button>
    </div>
  );
};

export default FilterBar;
