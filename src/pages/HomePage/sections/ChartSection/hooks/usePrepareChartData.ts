import type { Launch } from '@app-types/Launch';
import { useMemo } from 'react';

interface LaunchesByYear {
  year: number;
  count: number;
}
const usePrepareChartData = (launches: Launch[]) => {
  return useMemo(() => {
    const launchesPerYear: Record<number, number> = {};

    launches.forEach((launch) => {
      const year = new Date(launch.dateUtc).getFullYear();
      launchesPerYear[year] = (launchesPerYear[year] || 0) + 1;
    });

    const chartData: LaunchesByYear[] = Object.keys(launchesPerYear)
      .map(Number)
      .sort((a, b) => a - b)
      .map((year) => ({ year, count: launchesPerYear[year] }));

    return chartData;
  }, [launches]);
};

export default usePrepareChartData;
