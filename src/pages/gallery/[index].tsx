import { useRouter } from 'next/router';
import { images } from './constants';
import Link from 'next/link';

import { motion } from 'framer-motion';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

const Page = () => {
  const router = useRouter();
  const { index } = router.query;

  return (
    <>
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div className="back" variants={backVariants}>
          <Link href="/gallery">
            <a>← Back</a>
          </Link>
        </motion.div>
        <motion.img
          variants={imageVariants}
          src={`https://images.unsplash.com/${images[index]}?auto=format&fit=crop&w=1500`}
          width="600px"
          height="600px"
        />
      </motion.div>
      <style jsx>
        {`
          .back {
            position: fixed;
            top: 10px;
            left: 10px;
            font-size: 54px;
            z-index: 1;
          }
          .back a {
            text-decoration: none;
            color:white
        }
        `}
      </style>
    </>
  );
};

export default Page;
