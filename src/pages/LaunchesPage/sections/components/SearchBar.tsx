import { useEffect, useState, type ChangeEvent } from 'react';
import styles from './SearchBar.module.scss';
import { useDebounce } from 'hooks/useDebounce';

interface SearchBarOptions {
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ onSearchChange }: SearchBarOptions) => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);

  useEffect(() => {
    onSearchChange(debouncedValue);
  }, [debouncedValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search by mission name"
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBar;
