import Link from "next/link";
import AppleLogo from "@/app/assets/svgs/apple-logo";
import Container from "@/components/layout/Container";
import { Children } from "react";
import SearchIcon from "@/app/assets/svgs/search-icon";
import BagIcon from "@/app/assets/svgs/bag-icon";

export default function Header() {
  const links = [
    {
      content: <AppleLogo />,
      link: "#",
      icon: true,
    },
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
    {
      content: <SearchIcon />,
      link: "#",
      icon: true,
    },
    {
      content: <BagIcon />,
      link: "#",
      icon: true,
    },
  ];
  return (
    <header className="text-xs bg-white">
      <Container>
        <nav>
          <ul className="flex justify-evenly">
            {Children.toArray(
              links.map(({ content, link, icon }, i) => (
                <li className={i != 0 ? "ml-5" : ""}>
                  <Link
                    className={`inline-block ${!icon ? "py-3.5 px-2" : ""}`}
                    href={link}
                  >
                    {content}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
