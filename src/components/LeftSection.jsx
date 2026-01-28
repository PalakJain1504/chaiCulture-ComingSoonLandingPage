import { motion } from "framer-motion";
import Countdown from "./Countdown";
import EmailSignup from "./EmailSignup";
import SocialLinks from "./SocialLinks";

export default function LeftSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col justify-center space-y-6 max-w-md "
    >
      {/* logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-serif tracking-widest text-[#d9c36f]"
      >
        {/* jsut to mention ==> i didnt received the logo from your side so took one from the internet */}
        <img src="https://cdn.dribbble.com/userupload/7271180/file/original-c774e61b213b8e0e73a803eab956f813.jpg?resize=752x752&vertical=center" className="h-[110px] rounded-full " alt="" />
      </motion.div>

      {/* tags */}
      <p className="text-sm tracking-widest text-[#f7e3a1] uppercase">
        Brew the Royal Tradition
      </p>

      {/* headin */}
      <h1 className="text-2xl md:text-5xl font-serif tracking-wider text-[#f3d374]">
        Premium Chai Tea Premix
      </h1>

      {/* iintro */}
      <p className="text-sm text-[#ffeaa0] max-w-sm leading-relaxed">
        Experience the timeless elegance of royal Indian chai in every cup. <br /> A premium chai blend that brings royal warmth and timeless tradition to your cup.
      </p>

      <Countdown />

      <EmailSignup buttonText="Notify Me" />

      <SocialLinks />
    </motion.div>
  );
}
