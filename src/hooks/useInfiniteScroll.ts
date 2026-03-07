import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface useInfiniteScrollOptions {
  fetchNextPage: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
}

const useInfiniteScroll = ({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: useInfiniteScrollOptions) => {
  const { ref, inView } = useInView({ rootMargin: '10px' });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [inView, hasNextPage, isFetchingNextPage]);

  return ref;
};

export default useInfiniteScroll;
