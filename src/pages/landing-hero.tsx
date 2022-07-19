import Link from 'next/link';
import { Layout } from '../Layout';

import { Box, Typography, Button } from '@material-ui/core';

import { ReactElement } from 'react';

function LandingHero({ data }) {
  return (
    <Box sx={{ marginTop: 20 }}>
      <Typography>Multi chain Farm listings and ratings.</Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          See farms
        </Button>
      </Link>
    </Box>
  );
}

LandingHero.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default LandingHero;
