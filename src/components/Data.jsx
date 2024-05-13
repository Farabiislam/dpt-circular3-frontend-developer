import React, { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../../data/LHR_CDG_ADT1_TYPE_1.txt")
      .then((response) => response.text())
      .then((text) => {
        const flightOffers = JSON.parse(text);
        setData(flightOffers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="px-[10vw]">
      <h1 className="text-xl mb-4">Data parsed successfully</h1>
      <div className="overflow-x-auto w-full pb-4">
        <div className="bg-gray-200 text-gray-600 flex flex-shrink">
          <div className="border font-bold  w-[150px] flex justify-center px-4 py-2">
            Flight
          </div>
          <div className="border font-bold w-[150px] flex justify-center px-4 py-2">
            Aircraft
          </div>
          <div className="border font-bold w-[150px] flex justify-center px-4 py-2">
            Class
          </div>
          <div className="border font-bold w-[150px] flex justify-center px-4 py-2">
            Fare
          </div>
          <div className="border font-bold w-[150px] flex justify-center px-4 py-2">
            Route
          </div>
          <div className="border font-bold w-[250px] flex justify-center px-4 py-2">
            Departure
          </div>
          <div className="border font-bold w-[250px] flex justify-center px-4 py-2">
            Arrival
          </div>
          <div className="border font-bold w-[150px] flex justify-center px-4 py-2">
            Duration
          </div>
          <div className="border font-bold w-[150px] flex justify-center px-4 py-2">
            Price
          </div>
        </div>

        {Array.isArray(data.flightOffer) &&
          data.flightOffer.map((flight, index) => (
            <div
              className="relative "
              style={{ borderBottom: "1px solid red" }}
            >
              <div
                className={
                  flight.itineraries[0].segments.length == 2
                    ? "h-[1px] bg-red-200 absolute z-50 top-[80%] w-[90%] "
                    : ""
                }
              ></div>
              <div
                key={index}
                className={
                  index % 2 === 1
                    ? " flex flex-shrink bg-gray-100 text-gray-600 "
                    : "flex flex-shrink text-gray-600 "
                }
              >
                <div className="w-[150px] text-sm flex justify-center border-t   py-2">
                  <div className="flex flex-col">
                    {flight.itineraries[0].segments.map((a) => (
                      <div className="flex justify-between items-center ">
                        <span>
                          {a.carrierCode}
                          {a.aircraft}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[150px] text-sm flex justify-center  py-2">
                  <div className="flex flex-col">
                    {flight.itineraries[0].segments.map((a) => (
                      <div className="flex justify-between items-center ">
                        <span>{a.flightNumber}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" w-[150px] text-sm flex justify-center  py-2">
                  <div className="flex flex-col ">
                    {flight.class[0].map((f) => (
                      <span>{f}</span>
                    ))}
                  </div>
                </div>
                <div className="w-[150px] text-sm flex justify-center  py-2">
                  <div className="flex flex-col ">
                    {flight.fareBasis[0].map((f) => (
                      <span>{f}</span>
                    ))}
                  </div>
                </div>
                <div className=" w-[150px] text-sm flex justify-center  py-2">
                  <div className="flex flex-col">
                    {flight.itineraries[0].segments.map((a) => (
                      <div className="flex justify-between items-center ">
                        <span>
                          {a.departure.iataCode}-{a.arrival.iataCode}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[250px] text-sm flex justify-center  py-2">
                  <div className="flex flex-col">
                    {flight.itineraries[0].segments.map((a) => (
                      <div className="flex justify-between items-center ">
                        <span>{a.departure.at}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[250px] text-sm flex  justify-center  py-2">
                  <div className="flex flex-col">
                    {flight.itineraries[0].segments.map((a) => (
                      <div className="flex justify-between items-center gap-6 ">
                        <span>{a.arrival.at}</span>{" "}
                        <div className="w-[14px] border-b-2 border-dotted border-gray-600 "></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[150px] text-sm flex justify-center  py-2">
                  <span>{flight.itineraries[0].duration}</span>
                </div>

                <div className=" w-[150px] text-sm flex justify-center  py-2 ">
                  <div className="flex flex-col gap-1 items-center ">
                    <span>{flight.price}</span>
                    <button className="bg-buttonColor pb-1 text-white py-[2px] px-[10px] rounded-md">
                      SELECT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Data;
