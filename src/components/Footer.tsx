import { BriefcaseBusiness } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterLink {
  icon: string;
  label: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  {
    icon: "/assets/icons/portfolio.svg",
    label: "Portfolio",
    href: "https://rajendrapatha.tech",
  },
  {
    icon: "/assets/icons/twitter.svg",
    label: "X",
    href: "https://x.com/patha2702",
  },
  {
    icon: "/assets/icons/linkedin.svg",
    label: "Linkedin",
    href: "https://www.linkedin.com/in/patha2702",
  },
  {
    icon: "/assets/icons/github.png",
    label: "Github",
    href: "https://www.github.com/patha2702",
  },
  {
    icon: "/assets/icons/peerlist.png",
    label: "Peerlist",
    href: "https://peerlist.io/patha2702",
  },
];

const Footer = () => {
  return (
    <footer className="px-4 py-8 border-t border-t-slate-300 flex flex-col gap-4">
      <h2 className="text-4xl font-bold">Find me on</h2>
      <div className="flex justify-start items-center gap-6 flex-wrap">
        {footerLinks.map((link) => (
          <Link href={link.href} target="_blank" key={link.label}>
            <Image
              src={link.icon}
              width={40}
              height={40}
              alt={link.label}
              className="rounded-md"
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
