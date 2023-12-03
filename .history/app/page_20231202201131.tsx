import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About me</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
    </ul>
  );
}

export default Home;
