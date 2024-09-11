'use client'
import Link from "next/link";
import AppleLogo from "@/public/svgs/apple-logo";
import Container from "@/components/layout/Container";
import { Children, useState } from "react";
import SearchIcon from "@/public/svgs/search-icon";
import BagIcon from "@/public/svgs/bag-icon";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const links = [
    {
      content: "Store",
      link: "#",
    },
    {
      content: "Mac",
      link: "#",
    },
    {
      content: "iPad",
      link: "#",
    },
    {
      content: "iPhone",
      link: "#",
    },
    {
      content: "Watch",
      link: "#",
    },
    {
      content: "Vision",
      link: "#",
    },
    {
      content: "Aipods",
      link: "#",
    },
    {
      content: "TV & Home",
      link: "#",
    },
    {
      content: "Entertainment",
      link: "#",
    },
    {
      content: "Accessories",
      link: "#",
    },
    {
      content: "Support",
      link: "#",
    },
  ];
  return (
    <header className="bg-white relative z-50">
      <Container>
        <nav className="flex justify-between items-center">
          <ul>
            <li className="flex">
              <Link className={`inline-block`} href={"#"}>
                <AppleLogo />
              </Link>
            </li>
          </ul>
          <ul className={`${showMenu?'block absolute left-0 top-12 bg-white z-50':'hidden'} md:flex md:justify-evenly w-full`}>
            {Children.toArray(
              links.map(({ content, link, icon }, i) => (
                <li>
                  <Link
                    className={`inline-block ${!icon ? "text-2xl font-semibold px-6 py-4 md:font-normal md:py-3.5 md:px-2 md:text-xs" : ""}`}
                    href={link}
                  >
                    {content}
                  </Link>
                </li>
              ))
            )}
          </ul>
          <ul className="flex items-center">
            <li>
              <Link className={`block px-2`} href={"#"}>
                <SearchIcon />
              </Link>
            </li>
            <li>
              <Link className={`block px-2 ml-2 md:ml-3`} href={"#"}>
                <BagIcon />
              </Link>
            </li>
            <li className="md:hidden">
              <Link className={`block px-2 ml-2`} href={"#"}>
                <button onClick={()=>setShowMenu(!showMenu)}>Menu</button>
              </Link>
            </li>
          </ul>

          
        </nav>
      </Container>
    </header>
  );
}
