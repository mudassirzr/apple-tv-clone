import Link from "next/link";
import Container from "./layout/Container";

export default function SecondaryHeader() {
  return (
    <div className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-lg backdrop-saturate-[180%] border-b border-b-darkGray z-50">
      <Container>
        <nav className="flex justify-between items-center text-xs">
          <a href="#" className="pr-2 text-xl font-bold">Apple TV 4k</a>
          <ul className="flex items-center">
            <li className="ml-5">
              <Link href="#" className="py-4 px-2 inline-block">
                Overview
              </Link>
            </li>
            <li className="ml-5">
              <Link href="#" className="py-4 px-2 inline-block">
                Tech Specs
              </Link>
            </li>
            <li className="ml-5">
              <button className="py-1 px-3 inline-block bg-primary text-white rounded-full">
                Buy
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}
