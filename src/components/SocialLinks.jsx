import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/",
    label: "Twitter",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-5 text-[#f7ae61]">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          whileHover={{ y: -3, scale: 1.1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="no-underline inline-flex items-center justify-center"
        >
          <Icon
            size={24}
            strokeWidth={1.5}
            className="stroke-current"
          />
        </motion.a>
      ))}
    </div>
  );
}
