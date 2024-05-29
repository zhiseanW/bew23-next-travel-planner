import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 bg-blue-700 text-white">
      <div>
        <Link href="/">Travel Planner App</Link>
      </div>
      <div className="flex gap-10">
        <Link
          href="/"
          className="hover:text-blue-300 transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="/new"
          className="hover:text-blue-300 transition duration-300 ease-in-out"
        >
          New Trip
        </Link>
      </div>
    </div>
  );
}
