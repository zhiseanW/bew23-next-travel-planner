import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto my-4 max-w-screen-md p-5">
      <h1 className="text-4xl font-bold uppercase mb-4">Upcoming Trips</h1>
      <div className="flex justify-evenly gap-2">
        <div className="shadow-md border-1 p-4 w-full">
          <h3 className="text-xl font-bold mb-2">Bangkok</h3>
          <p className="text-sm mb-2">Date: 2024-04-30 - 2024-05-01</p>
          <p className="text-sm mb-6">Budget: $1000</p>
          <div className="text-center">
            <Link
              href="/trips/1"
              className="p-2 bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
            >
              View Details
            </Link>
          </div>
        </div>
        <div className="shadow-md border-1 p-4 w-full">
          {" "}
          <h3 className="text-xl font-bold mb-2">Bangkok</h3>
          <p className="text-sm mb-2">Date: 2024-04-30 - 2024-05-01</p>
          <p className="text-sm mb-6">Budget: $1000</p>
          <div className="text-center">
            <Link
              href="/trips/2"
              className="p-2 bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
            >
              View Details
            </Link>
          </div>
        </div>
        <div className="shadow-md border-1 p-4 w-full">
          {" "}
          <h3 className="text-xl font-bold mb-2">Bangkok</h3>
          <p className="text-sm mb-2">Date: 2024-04-30 - 2024-05-01</p>
          <p className="text-sm mb-6">Budget: $1000</p>
          <div className="text-center">
            <Link
              href="/trips/3"
              className="p-2 bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
