import { motion } from "framer-motion";

// IMPORT IMAGES FROM ASSETS
import Image from "../assets/chai-hands.jpg";
import Image1 from "../assets/chai-ingredients.jpg";
import Image2 from "../assets/hero-chai.jpg";

export default function RightImages() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[380px] sm:h-[420px] md:h-[500px]"
    >
      {/* MAIN IMAGE */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute right-4 top-0 w-[65%] h-full overflow-hidden rounded-sm hidden sm:block"
      >
        <img
          src={Image}
          alt="Chai Culture premium chai"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* AUX IMAGE 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute left-5 top-20 w-[40%] h-[220px] overflow-hidden rounded-sm shadow-sm hidden sm:block "
      >
        <img
          src={Image1}
          alt="Chai cup close up"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* AUX IMAGE 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute left-28 bottom-10 w-[35%] h-[180px] overflow-hidden rounded-sm shadow-sm hidden md:block"
      >
        <img
          src={Image2}
          alt="Chai ingredients and texture"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
