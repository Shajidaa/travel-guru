import { useLoaderData, useParams } from "react-router";

const Booking = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const filterData = data.find((place) => place.id == id);

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${filterData.img})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex justify-between items-center w-11/12 mx-auto gap-10">
        {/* Left text */}
        <div className="max-w-md text-white space-y-5 w-1/2">
          <h1 className="text-5xl font-extrabold">{filterData.name}</h1>
          <p className="text-sm leading-relaxed">{filterData.desc}</p>
        </div>

        {/* Right cards */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Origin</label>
              <input
                type="text"
                className="input  placeholder-black font-bold"
                placeholder="Dhaka"
              />
              <label className="label">Destination</label>
              <input
                type="text"
                className="input placeholder-black font-bold"
                placeholder="Cox-bazar"
              />

              <button className="btn  border-0 bg-[#F9A51A] mt-4">
                Start Booking
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
