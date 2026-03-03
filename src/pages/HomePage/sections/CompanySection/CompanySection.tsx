import Skeleton from 'react-loading-skeleton';
import { useCompanyInfo } from '@api/company';

const CompanySection = () => {
  const { data, isLoading, isError } = useCompanyInfo();

  if (isLoading)
    return (
      <div>
        <Skeleton width={250} height={30} />
        <Skeleton count={7} height={20} style={{ marginTop: '0.5rem' }} />
      </div>
    );

  if (isError || !data) {
    return <p>Error loading company info!</p>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.founder}</p>
      <p>{data.founded}</p>
      <p>{data.employees}</p>
      <p>{data.launchSites}</p>
      <p>{data.testSites}</p>
      <p>{data.summary}</p>
    </div>
  );
};

export default CompanySection;
