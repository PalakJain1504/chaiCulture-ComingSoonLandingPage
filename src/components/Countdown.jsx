import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown({
  //taking random time here
  initialTime = { hours: "03", minutes: "42", seconds: "00" },
}) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let s = parseInt(prev.seconds, 10);
        let m = parseInt(prev.minutes, 10);
        let h = parseInt(prev.hours, 10);

        if (s > 0) s--;
        else {
          s = 59;
          if (m > 0) m--;
          else {
            m = 59;
            if (h > 0) h--;
          }
        }

        return {
          hours: String(h).padStart(2, "0"),
          minutes: String(m).padStart(2, "0"),
          seconds: String(s).padStart(2, "0"),
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex space-x-4 text-2xl font-mono tracking-widest text-[#e1c8b2]"
    >
      <span>{time.hours}</span>
      <span>:</span>
      <span>{time.minutes}</span>
      <span>:</span>
      <span>{time.seconds}</span>
    </motion.div>
  );
}
