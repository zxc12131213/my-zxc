import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer>
      <div className={styles.container}>
        <div>{name}</div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
