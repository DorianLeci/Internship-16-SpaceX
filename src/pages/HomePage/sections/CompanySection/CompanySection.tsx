import { useCompanyInfo } from '@api/company';
import styles from './CompanySection.module.scss';
import AnimatedSkeleton from '@components/AnimatedSkeleton';
import { motion } from 'framer-motion';

const CompanySection = () => {
  const { data, isLoading, isError } = useCompanyInfo();

  if (isLoading)
    return (
      <div className={styles.skeletonContainer}>
        <AnimatedSkeleton width="60%" height={30} />
        <AnimatedSkeleton width="100%" count={8} height={24} />
      </div>
    );

  if (isError || !data) {
    return <p>Error loading company info!</p>;
  }

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
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
            {data.headquarters.address}, {data.headquarters.city},{' '}
            {data.headquarters.state}
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
    </motion.div>
  );
};

export default CompanySection;
