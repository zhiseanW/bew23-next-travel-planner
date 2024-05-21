import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-3">
          <p className="font-medium text-4xl">Upcoming Trips</p>
        </div>
        <div className=" grid grid-cols-4 gap-10">
          <div className="w-96 h-60 shadow-lg p-5 relative">
            <div className="mb-5">
              <p className="font-medium text-lg">Bangkok</p>
            </div>
            <div className="mb-5">
              <p>2024-05-30 - 2024-050-31</p>
            </div>
            <div className="mb-5">
              <p>$ 1000</p>
            </div>
            <div className="mt-12 text-center bottom-0">
              <button className="">
                <p className="text-blue-400">VIEW DETAILS</p>
              </button>
            </div>
          </div>
          <div className="w-96 h-60 shadow-lg p-5">
            <div>
              <div className="mb-5">
                <p className="font-medium text-lg">Singapore</p>
              </div>
              <div className="mb-5">
                <p>2024-06-05 - 2024-06-06</p>
              </div>
              <div className="mb-5">
                <p>$ 2000</p>
              </div>
              <div className="mt-12 text-center bottom-0">
                <button className="">
                  <p className="text-blue-400">VIEW DETAILS</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
