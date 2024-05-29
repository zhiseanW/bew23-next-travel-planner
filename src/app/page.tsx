import Image from "next/image";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

// setup database connection using prisma
const db = new PrismaClient();

export default async function Home() {
  //get the strips data from db
  const trips = await db.trip.findMany();
  console.log();

  interface destinations {
    id: String;
    destination: String;
    start_date: String;
    end_date: String;
    budget: number;
  }

  // const trip: destinations[] = [
  //   {
  //     id: "1",
  //     destination: "North Point",
  //     start_date: "2019-05-30",
  //     end_date: "2019-050-31",
  //     price: 1000,
  //   },
  //   {
  //     id: "2",
  //     destination: "Oured",
  //     start_date: "2019-03-05",
  //     end_date: "2019-08-10",
  //     price: 2000,
  //   },
  //   {
  //     id: "3",
  //     destination: "Selatapura",
  //     start_date: "2019-06-05",
  //     end_date: "2019-08-06",
  //     price: 3000,
  //   },
  //   {
  //     id: "4",
  //     destination: "Farbanti",
  //     start_date: "2019-07-05",
  //     end_date: "2019-08-20",
  //     price: 4200,
  //   },
  // ];
  return (
    <>
      <div className="container mx-auto ">
        <div className="py-3">
          <p className="font-medium text-4xl">Upcoming Trips</p>
        </div>
        {trips.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-3">
            {trips.map((t) => (
              <div className="w-full h-60 shadow-lg p-5 relative" key={t.id}>
                <div className="mb-7">
                  <p className="font-medium text-lg">{t.destination}</p>
                </div>
                <div className="mb-7">
                  <p>
                    Date: {t.startDate.toISOString().split("T")[0]} -
                    {t.endDate.toISOString().split("T")[0]}
                  </p>
                </div>
                <div className="mb-7">
                  <p>Budget: ${t.budget}</p>
                </div>
                <div className="mt-8 text-center bottom-0 hover:bg-blue-200 py-4 ease-in-out transition duration-300">
                  <Link href={"/trips/" + t.id} className="text-blue-400 ">
                    VIEW DETAILS
                  </Link>
                </div>
                {/* <div className="text-center">
                <Link
                  href="/2"
                  className="p-2 bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
                >
                  View Details
                </Link>
              </div> */}
              </div>
            ))}
          </div>
        ) : (
          <div>not found</div>
        )}
      </div>
    </>
  );
}
