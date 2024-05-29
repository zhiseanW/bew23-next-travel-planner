import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-6 bg-blue-500 text-white ">
      <div className="ms-5">
        <Link href="/">
          <p className="text-xl hover:text-gray-300 transition duration-300 ease-in-out">
            Travel Planner App
          </p>
        </Link>
      </div>
      <div className="flex gap-2 me-5">
        <Link href="/">
          <p className="text-xl hover:text-gray-300 transition duration-300 ease-in-out">
            Home
          </p>
        </Link>
        <Link href="/new">
          <p className="text-xl hover:text-gray-300 transition duration-300 ease-in-out">
            New trip
          </p>
        </Link>
      </div>
    </div>
  );
}
