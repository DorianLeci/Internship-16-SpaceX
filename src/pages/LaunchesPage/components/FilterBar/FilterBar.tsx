import { Filter } from '@app-types/Filter';
import styles from './FilterBar.module.scss';

interface FilterBarOptions {
  currentFilter?: Filter;
  onFilterChange: (filterValue: Filter | undefined) => void;
}

const filters: { label: string; value: Filter | undefined }[] = [
  { label: 'All', value: undefined },
  { label: 'Success', value: Filter.SUCCESS },
  { label: 'Failure', value: Filter.FAILURE },
  { label: 'Upcoming', value: Filter.UPCOMING },
];

const FilterBar = ({ onFilterChange, currentFilter }: FilterBarOptions) => {
  return (
    <div className={styles.filterBar}>
      {filters.map((f) => (
        <div className={styles.filterBar} key={f.label}>
          <button
            className={`${styles.filterButton} ${currentFilter == f.value ? styles.active : ''}`}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
