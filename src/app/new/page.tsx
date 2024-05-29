import TripForm from "@/components/TripForm";
import { PrismaClient } from "@prisma/client";

// setup database connection using prisma
const db = new PrismaClient();

export default async function New() {
  // const trips = await db.trip.create({

  // });
  return (
    <div className="container mx-auto my-4 max-w-screen-md p-5 border-2 border-black">
      <h1 className="text-2xl font-bold uppercase mb-4">New Trips</h1>
      <TripForm type="new" />
    </div>
  );
}
