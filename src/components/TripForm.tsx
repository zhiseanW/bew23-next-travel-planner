import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// setup database connection using prisma
const db = new PrismaClient();

// ? make the field optional instead of required field
interface TripFormProps {
  type: string;
  destination?: string;
  startDate?: string;
  endDate?: string;
  budget?: number | null;
  id?: string;
}

//function to create trip
const createTrip = async (formData: FormData) => {
  // telling nextjs to perform this action at the backend
  "use server";
  try {
    const destination = formData.get("destination") as string;
    const startDate = formData.get("start_date") as string;
    const endDate = formData.get("end_date") as string;
    const budget = formData.get("budget") as string;
    // console.log(destination);

    //create new trip in your db
    // await db.trip.create;

    const trip = await db.trip.create({
      data: {
        destination: destination,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        budget: parseInt(budget), // convert to integer
      },
    });
  } catch (error) {
    console.log(error);
  }
  //redirect back to homepage
  revalidatePath("/");
  redirect("/");
};

const updateTrip = async (formData: FormData) => {
  // telling nextjs to perform this action at the backend
  "use server";
  try {
    const destination = formData.get("destination") as string;
    const startDate = formData.get("start_date") as string;
    const endDate = formData.get("end_date") as string;
    const budget = formData.get("budget") as string;
    const id = formData.get("id") as string;

    await db.trip.update({
      where: {
        id: id,
      },
      data: {
        destination: destination,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        budget: parseInt(budget), // convert it to integer
      },
    });
  } catch (error) {
    console.log(error);
  }

  // redirect back to home page
  revalidatePath("/");
  redirect("/");
};

export default function TripForm(props: TripFormProps) {
  const {
    type = "new",
    destination = "",
    startDate = new Date().toISOString().split("T")[0],
    endDate = new Date().toISOString().split("T")[0],
    budget = 0,
    id = "",
  } = props;
  return (
    <form action={type === "new" ? createTrip : updateTrip} method="POST">
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="destination">Destination</label>
          <input
            id="destination"
            type="text"
            name="destination"
            defaultValue={destination}
            placeholder="Enter your destination here"
            className="w-full border border-black rounded p-4"
          />
        </div>
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="start_date">Start Date</label>
            <input
              id="start_date"
              type="date"
              name="start_date"
              defaultValue={startDate}
              className="w-full border border-black rounded p-4"
            />
          </div>
          <div className="w-full">
            <label htmlFor="end_date">End Date</label>
            <input
              id="end_date"
              type="date"
              name="end_date"
              defaultValue={endDate}
              className="w-full border border-black rounded p-4"
            />
          </div>
        </div>
        <div>
          <label htmlFor="budget">Budget</label>
          <input
            id="budget"
            type="number"
            name="budget"
            defaultValue={budget?.toString()}
            placeholder="1000"
            className="w-full border border-black rounded p-4"
          />
        </div>
        <input type="hidden" name="id" value={id} />
        <button
          type="submit"
          className="w-full bg-blue-700 text-white p-4 text-center"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
