// "use server";

// import { PrismaClient } from "@prisma/client";
// import { redirect } from "next/navigation";

// // setup database connection using Prisma
// const db = new PrismaClient();

// // function to create trip in database
// export const createTrip = async (formData: FormData) => {
//   // telling nextjs to perform this action at the backend

//   try {
//     const destination = formData.get("destination") as string;
//     const startDate = formData.get("start_date") as string;
//     const endDate = formData.get("end_date") as string;
//     const budget = formData.get("budget") as string;

//     // create new trip in your db
//     const trip = await db.trip.create({
//       data: {
//         destination: destination,
//         startDate: new Date(startDate),
//         endDate: new Date(endDate),
//         budget: parseInt(budget), // convert it to integer
//       },
//     });
//   } catch (error) {
//     console.log(error);
//   }
//   // redirect back to home page
//   redirect("/");
// };
