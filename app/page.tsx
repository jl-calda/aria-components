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
