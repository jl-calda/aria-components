import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <Link href="/button">
          <li>Button</li>
        </Link>
      </ul>
    </main>
  );
}
