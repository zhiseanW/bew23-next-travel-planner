import TripForm from "@/components/TripForm";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

interface EditTripProps {
  params: {
    id: string;
  };
}

export default async function EditTripPage(props: EditTripProps) {
  // get the trip id
  const id = props.params.id;
  // load the trip data using the id
  const trip = await db.trip.findUnique({
    where: {
      id: id,
    },
  });

  if (!trip) return "Trip not found";

  return (
    <div className="container mx-auto my-4 max-w-screen-md p-5 border-2 border-black">
      <h1 className="text-2xl font-bold uppercase mb-4">Edit Trip</h1>
      <TripForm
        type="edit"
        id={id}
        destination={trip.destination}
        startDate={trip.startDate.toISOString().split("T")[0]}
        endDate={trip.endDate.toISOString().split("T")[0]}
        budget={trip.budget}
      />
    </div>
  );
}
