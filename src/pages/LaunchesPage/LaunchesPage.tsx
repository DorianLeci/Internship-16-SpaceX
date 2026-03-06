import { useLaunches } from '@api/launches';
import { Filter } from '@app-types/Filter';
import type { LaunchFilter } from '@app-types/LaunchFilter';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import styles from './LaunchesPage.module.scss';
import LaunchCard from './components/LaunchCard';
import Pagination from '@components/Pagination';
import useReveal from 'hooks/useReveal';
import SectionError from '@components/SectionError';
import LaunchesPageSkeleton from './Skeleton/LaunchesPageSkeleton';
import useLaunchesPagination from 'hooks/useLaunchPagination';
import EmptyState from '@components/EmptyState';

export const PAGE_LIMIT = 20;

const LaunchesPage = () => {
  const { filterState, handleSearch, handleFilterChange, handlePageChange } =
    useLaunchesPagination();

  const { data, isLoading, isError, refetch } = useLaunches(filterState);
  const visible = useReveal({ isLoading });

  if (visible) return <LaunchesPageSkeleton />;

  if (isError || !data) {
    return <SectionError message="Error loading launches!" onRetry={refetch} />;
  }

  const isEmpty = !visible && data.docs.length === 0;

  return (
    <div className={styles.container}>
      <h1>Launches</h1>
      <SearchBar
        onSearchChange={handleSearch}
        value={filterState.search || ''}
      />
      <FilterBar onFilterChange={handleFilterChange} />
      {isEmpty && <EmptyState message="No launches found" />}

      <div className={styles.cardContainer}>
        {data?.docs.map((launch) => (
          <LaunchCard
            key={launch.id}
            name={launch.name}
            success={launch.success}
            upcoming={launch.upcoming}
            details={launch.details}
          />
        ))}
      </div>

      <Pagination
        pageCount={data.totalPages}
        currentPage={filterState.page}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default LaunchesPage;
