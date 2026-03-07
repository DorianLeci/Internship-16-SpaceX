import { useAllLaunches } from '@api/allLaunches';
import useReveal from 'hooks/useReveal';
import usePrepareChartData from './hooks/usePrepareChartData';
import FadeInUp from '@components/FadeInUp';
import styles from './ChartSection.module.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import Error from '@components/Error';
import useTheme from 'hooks/useTheme';
import { ThemeEnum } from '@app-types/Theme';

const ChartSection = () => {
  const { data, isLoading, isError, refetch } = useAllLaunches();
  const visible = useReveal({ isLoading });
  const { theme } = useTheme();

  const chartData = usePrepareChartData(data || []);

  if (visible) return <p>Loading...</p>;

  if (isError || !data)
    return <Error message={'Error loading chart info!'} onRetry={refetch} />;

  const isThemeLight = theme === ThemeEnum.LIGHT;

  return (
    <FadeInUp className={styles.chartContainer}>
      <h2 className={styles.title}>Launches per Year</h2>
      <ResponsiveContainer>
        <BarChart data={chartData}>
          <XAxis dataKey="year" />
          <YAxis allowDecimals={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: isThemeLight ? '#33a0e3' : 'black',
              borderRadius: 12,
              padding: '6px 12px',
              color: 'white',
            }}
            itemStyle={{
              padding: '6px',
              color: isThemeLight ? 'black' : 'white',
            }}
          />
          <Bar
            dataKey="count"
            fill={isThemeLight ? '#33a0e3' : 'rgb(196, 126, 6)'}
          />
        </BarChart>
      </ResponsiveContainer>
    </FadeInUp>
  );
};

export default ChartSection;
