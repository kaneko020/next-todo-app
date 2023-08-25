import Image from "next/image";
import Link from "next/link";

import { navList } from "../../data/nav";

export default function Header() {
  return (
    <header className="w-full flex items-center p-4 bg-gray-200">
      <Link href="/">
        <a className="hover:opacity-60">
          <Image loader={({src}) => src} src="/vercel.svg" alt="vercel" width={180} height={40} />
        </a>
      </Link>
      <nav className="w-full mx-4">
        <ul className="flex justify-end">
          {navList.map((item) => {
            return (
              <li key={item} className="mx-4">
                <Link href={`/${item}`}>
                  <a className="text-[17px] hover:opacity-60">{item}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
