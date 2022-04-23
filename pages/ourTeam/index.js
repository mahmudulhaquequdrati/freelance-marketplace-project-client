import React from "react";
import OurTeam from "../../components/OurTeam/ourTeam";
import { motion } from "framer-motion";
import HeaderTop from "../../components/Shared/HeaderTop";
import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";

const index = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div>
      <header>
        <HeaderTop />
        <Header />
      </header>
      <main>
        <motion.div variants={container} initial="hidden" animate="visible">
          <OurTeam />
        </motion.div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default index;
