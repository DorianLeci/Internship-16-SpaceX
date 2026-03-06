import { useEffect, useState } from 'react';

interface useDebounceOptions<T> {
  value: T;
  delay?: number;
}
export const useDebounce = <T>({
  value,
  delay = 500,
}: useDebounceOptions<T>) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
