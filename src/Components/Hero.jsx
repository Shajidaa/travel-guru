import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Hero = () => {
  const [destination, setDestination] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDestination(data);
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  }, []);
  if (loading) {
    return <p>loading</p>;
  }

  const handlePrev = () => {
    if (current === destination.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  const handleNext = () => {
    if (current === 0) {
      setCurrent(destination.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  const active = destination[current];

  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${active.img})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex justify-between items-center w-11/12 mx-auto gap-10">
        {/* Left text */}
        <div className="max-w-md text-white space-y-5 w-1/2">
          <h1 className="text-5xl font-extrabold">{active.name}</h1>
          <p className="text-sm leading-relaxed">
            {active.desc.length > 150
              ? `${active.desc.slice(0, 150)}...`
              : active.desc}
          </p>
          <Link
            to={`/booking/${active.id}`}
            className="btn bg-yellow-500 border-none text-black hover:bg-yellow-600"
          >
            Booking →
          </Link>
        </div>

        {/* Right cards */}
        <div className="flex  gap-5">
          {destination.map((place, idx) => (
            <div
              key={idx}
              className={`relative w-56 h-80 bg-cover bg-center rounded-xl overflow-hidden cursor-pointer border-2 ${
                idx === current ? "border-yellow-500" : "border-transparent"
              }`}
              style={{
                backgroundImage: `url(${place.img}) `,
              }}
              onClick={() => setCurrent(idx)}
            >
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <p className="text-white font-bold">{place.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-5">
        <button
          onClick={handlePrev}
          className="btn btn-circle bg-white/20 text-white hover:bg-yellow-500 border-none"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="btn btn-circle bg-white/20 text-white hover:bg-yellow-500 border-none"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
