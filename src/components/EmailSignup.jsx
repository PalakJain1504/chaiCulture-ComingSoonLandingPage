import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

export default function EmailSignup({ buttonText }) {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setSuccess(true);
    setEmail("");

    

    setTimeout(() => {
      setSuccess(false);
    }, 1500);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="flex items-center max-w-sm border border-[#c9b8a5]"
    >
      <input
        type="email"
        placeholder="Your Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-2 bg-transparent outline-none text-sm text-white"
        required
      />

      <button
        type="submit"
        className="px-6 py-2 bg-[#3b2a1a] text-white text-sm tracking-wide hover:opacity-90"
      >
        {buttonText}
      </button>

      {/* green check sign */}
      <AnimatePresence>
        {success && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 0.6 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.25 }}
            className="ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-green-600 " 
          >
            <Check size={16} strokeWidth={3} className="text-white" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
