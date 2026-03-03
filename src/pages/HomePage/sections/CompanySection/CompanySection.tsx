import { useCompanyInfo } from '@api/company';
import Skeleton from 'react-loading-skeleton';

const CompanySection = () => {
  const { data, isLoading, isError } = useCompanyInfo();

  if (isLoading)
    return (
      <div>
        return (
        <div>
          <h1>
            <Skeleton width={250} height={30} />
          </h1>
          <p>
            <Skeleton count={3} />
          </p>
        </div>
        );
      </div>
    );

  if (isError) {
    return <p>Error loading company info!</p>;
  }

  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  );
};

export default CompanySection;
