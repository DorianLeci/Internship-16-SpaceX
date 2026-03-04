import { Filter } from '@app-types/Filter';

interface FilterBarOptions {
  onFilterChange: (filterValue: Filter | undefined) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarOptions) => {
  return (
    <div>
      <button onClick={() => onFilterChange(undefined)}>All</button>
      <button onClick={() => onFilterChange(Filter.SUCCESS)}>Success</button>
      <button onClick={() => onFilterChange(Filter.FAILURE)}>Failure</button>
      <button onClick={() => onFilterChange(Filter.UPCOMING)}>Upcoming</button>
    </div>
  );
};

export default FilterBar;
