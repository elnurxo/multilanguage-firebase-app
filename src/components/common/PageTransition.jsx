import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {
          opacity: 0,
          scale: 0.97,
        },
        animate: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        },
        exit: {
          opacity: 0,
          scale: 0.98,
          transition: {
            duration: 0.2,
            ease: "easeInOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTransition;
