import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import styles from './SearchBar.module.scss';
import { useDebounce } from 'hooks/useDebounce';

interface SearchBarOptions {
  value: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  value,
  onSearchChange,
  placeholder,
}: SearchBarOptions) => {
  const firstRender = useRef(true);
  const [internalValue, setInternalValue] = useState(value);
  const debouncedValue = useDebounce({ value: internalValue });

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    onSearchChange(debouncedValue);
  }, [debouncedValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder={placeholder ?? 'Type your input here...'}
        value={internalValue}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBar;
