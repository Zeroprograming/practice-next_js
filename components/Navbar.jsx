import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <h1>Zero</h1>

      <ul>
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
