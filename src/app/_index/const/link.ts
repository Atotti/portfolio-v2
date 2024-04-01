import gitHubIcon from "@/assets/icons/github.svg";
import hatenablogIcon from "@/assets/icons/hatenablog.svg";
import keybaseIcon from "@/assets/icons/keybase.svg";
import misskeyIcon from "@/assets/icons/misskey.webp";
import noteIcon from "@/assets/icons/note.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import zennIcon from "@/assets/icons/zenn.svg";

interface Link {
  platform: string;
  name: string;
  url: string;
  color: string;
  icon: {
    url: string;
    scale: number;
  };
}

export const links: Link[] = [
  {
    platform: "Twitter",
    name: "@aya172957",
    url: "https://twitter.com/aya172957",
    color: "#1da1f2",
    icon: {
      url: twitterIcon.src,
      scale: 1.0,
    },
  },
  {
    platform: "GitHub",
    name: "Atotti",
    url: "https://github.com/Atotti",
    color: "#171515",
    icon: {
      url: gitHubIcon.src,
      scale: 1.1,
    },
  },
];
