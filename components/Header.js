import Link from "next/link";

function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
