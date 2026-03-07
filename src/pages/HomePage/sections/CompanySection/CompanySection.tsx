import { useCompanyInfo } from '@api/company';
import styles from './CompanySection.module.scss';
import CompanySkeleton from './Skeleton';
import FadeInUp from '@components/FadeInUp';
import useReveal from 'hooks/useReveal';
import Error from '@components/Error';

const CompanySection = () => {
  const { data, isLoading, isError, refetch } = useCompanyInfo();
  const visible = useReveal({ isLoading });

  if (visible) return <CompanySkeleton />;

  if (isError || !data)
    return <Error message={'Error loading company info!'} onRetry={refetch} />;

  return (
    <FadeInUp className={styles.container}>
      <h2 className={styles.title}>Company info</h2>
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.infoItem}>
            <p className={styles.label}>Founder</p>
            <p className={styles.value}>{data.founder}</p>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.label}>CEO</p>
            <p className={styles.value}>{data.ceo}</p>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.label}>Founded</p>
            <p className={styles.value}>{data.founded}</p>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.label}>Employees</p>
            <p className={styles.value}>{data.employees}</p>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.label}>Launch Sites</p>
            <p className={styles.value}>{data.launchSites}</p>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.label}>Test Sites</p>
            <p className={styles.value}>{data.testSites}</p>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.label}>Headquarters</p>
            <p className={styles.value}>
              <span>{data.headquarters.address}, </span>
              <span>{data.headquarters.city}, </span>
              <span>{data.headquarters.state}</span>
            </p>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.label}>Links</p>
            <div className={styles.links}>
              <a
                className={styles.link}
                href={data.links.website}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
              <a
                className={styles.link}
                href={data.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                className={styles.link}
                href={data.links.flickr}
                target="_blank"
                rel="noreferrer"
              >
                Flickr
              </a>
            </div>
          </div>
        </div>

        <div className={styles.infoItem}>
          <p className={styles.label}>Summary</p>
          <p className={styles.value}>{data.summary}</p>
        </div>
      </div>
    </FadeInUp>
  );
};

export default CompanySection;
