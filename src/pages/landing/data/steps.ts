import { LuBookmarkPlus } from "react-icons/lu";
import { LiaSmsSolid } from "react-icons/lia";
import { FaRegBell } from "react-icons/fa6";

export const steps = [
  {
    icon: LuBookmarkPlus,
    title: "Add Channel",
    description:
      "Paste a YouTube channel URL or name to start receiving upload alerts.",
    color: "from-purple-400 to-purple-500  ",
  },
  {
    icon: FaRegBell,
    title: "Monitor Uploads",
    description: "Our system watches for new videos 24/7 so you don't have to.",
    color: "from-purple-400 to-blue-400  ",
  },
  {
    icon: LiaSmsSolid,
    title: "Get SMS + AI Summary",
    description:
      "Instant text with the video title, link, and a smart summary of what it's about.",
    color: "from-blue-400 to-blue-500  ",
  },
];
