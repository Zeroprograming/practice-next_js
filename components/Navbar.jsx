import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-[#101010] flex px-0 py-2 items-center justify-between ">
      <Link href="/">
        <h1 className="mx-4 text-3xl font-bold">Zero</h1>
      </Link>
      <ul className=" mx-4 flex gap-4 list-none">
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
