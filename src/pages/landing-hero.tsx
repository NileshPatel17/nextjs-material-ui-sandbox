import { ReactElement } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Box, Typography, Button } from '@material-ui/core';

import { Layout } from '../Layout';
import { varFadeInRight } from '../components/animate/variants/fade';

const DISTANCE = 120;

const TRANSITION_ENTER = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const TRANSITION_EXIT = {
  duration: 0.48,
  ease: [0.43, 0.13, 0.23, 0.96],
};

function LandingHero({ data }) {
  return (
    <Box sx={{ marginTop: 50 }}>
      <motion.div variants={varFadeInRight}>
        <Typography variant="h2">Fade In Right with variants</Typography>
      </motion.div>
      <motion.div
        initial={{ x: DISTANCE, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: TRANSITION_ENTER }}
        exit={{ x: DISTANCE, opacity: 0, transition: TRANSITION_EXIT }}
      >
        <Typography variant="h2">with Variants</Typography>
      </motion.div>
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
