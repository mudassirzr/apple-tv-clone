'use client'
import Link from "next/link";
import Container from "./layout/Container";
import { useState } from "react";

export default function SecondaryHeader() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="sticky top-0 py-2 md:py-0 bg-white bg-opacity-80 backdrop-blur-lg backdrop-saturate-[180%] border-b border-b-[rgb(211 211 212)] z-40">
      <Container>
        <nav className="flex justify-between items-center">
          <a href="#" className="pr-2 text-xl font-bold">
            Apple TV 4k
          </a>
          <div className="flex items-center text-xs">
            <ul className={`${showMenu?'block absolute w-full left-0 top-8 bg-white':'hidden'} md:flex items-center`}>
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
            </ul>
            <button className="md:hidden transform rotate-90" onClick={()=>setShowMenu(!showMenu)}>
              {">"}
            </button>
            <button className="ml-5 py-1 px-3 inline-block bg-primary text-white rounded-full">
              Buy
            </button>
          </div>
        </nav>
      </Container>
    </div>
  );
}
