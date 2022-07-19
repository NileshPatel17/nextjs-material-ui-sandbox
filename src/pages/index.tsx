import Link from 'next/link';
import { Layout } from '../Layout';

import { Box, Card } from '@material-ui/core';

import AnimatedNumber from '../components/AnimatedNumber';
import { ReactElement } from 'react';

function Home({ data }) {
  return (
    <Card>
      <Box>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {data.map((item) => (
            <li key={item.key}>
              <Link href={item.link}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <AnimatedNumber value={100} />
      </Box>
    </Card>
  );
}

export async function getServerSideProps() {
  // const res = await fetch(`api/hello`);
  // const data = await res.json();
  const row_data = [
    {
      title: 'Builder Book',
      link: 'https://github.com/async-labs/builderbook',
    },
    {
      title: 'Nitro',
      link: 'https://github.com/williamluke4/Nitro',
    },
    {
      title: 'Next Shopify Storefront',
      link: 'https://github.com/Maxvien/next-shopify-storefront',
    },
    {
      title: 'SAAS Boilerplate',
      link: 'https://github.com/async-labs/saas',
    },
    {
      title: 'personal dashboard',
      link: 'https://github.com/KaterinaLupacheva/my-projects-dashboard',
    },
    {
      title: 'Formik-Antd',
      link: 'https://github.com/jannikbuschke/formik-antd',
    },
  ];
  const data = row_data.map((item, index) => ({ ...item, key: index }));
  return {
    props: {
      data,
    },
  };
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
