import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const socialIcon = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

interface SocialProps {
  containerClass?: string;
  iconClass?: string;
}

function Social({ containerClass, iconClass }: SocialProps) {
  return (
    <div className={containerClass}>
      {socialIcon.map((item) => {
        return (
          <Link key={item.path} className={iconClass} href={item.path}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
