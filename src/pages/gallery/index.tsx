import Link from 'next/link';
import { Layout } from '../../Layout';

import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { images } from './constants';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const Thumbnail = ({ id, i }) => {
  return (
    <motion.div className="thumbnail" variants={thumbnailVariants}>
      <motion.div
        className="frame"
        variants={frameVariants}
        whileHover="hover"
        transition={transition}
      >
        <Link href="/gallery/[index]" as={`/gallery/${i}`} scroll={false}>
          <img
            src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1500`}
            width="200px"
            height="auto"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <h1>Gallery</h1>
        <motion.div
          className="thumbnails"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          {images.map((id, i) => (
            <Thumbnail key={id} id={id} i={i} />
          ))}
        </motion.div>
      </div>
      <style>
        {`
          h1 {
            color: black;
          }
          .gallery {
            padding: 4px;
            margin: 0 auto;
            width: 100%;
            max-width: 1200px;
            position: relative;
        }

        .thumbnails {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap:10px;
            justify-content: center;
        }
        @media screen and (min-width: 600px) {
          h1 {
            font-size: 140px;
            bottom: -130px;
          }
        }

        @media screen and (min-width: 800px) {
          h1 {
            font-size: 180px;
            bottom: -170px;
          }
        }

        @media screen and (min-width: 1000px) {
          h1 {
            font-size: 220px;
            bottom: -200px;
          }
        }
        @media screen and (min-width: 1200px) {
          h1 {
            font-size: 280px;
            bottom: -260px;
          }
        }
        `}
      </style>
    </>
  );
};

Gallery.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Gallery;
