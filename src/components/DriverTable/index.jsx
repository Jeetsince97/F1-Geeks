import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import DriverRow from "./DriverRow";

const DriverTable = () => {
  const { data, loading, error } = useFetch(
    "http://ergast.com/api/f1/current/driverStandings.json"
  );
  const [driverArray, setDriverArray] = useState([]);

  useEffect(() => {
    if (data != null && !error) {
      setDriverArray(
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      );
    }
  }, [data, loading, error]);
  if (loading) return <h1>Loading......</h1>;
  if (error) console.log(error);

  //create a variable year to store the year of the current season
  const year = data.MRData.StandingsTable.season;

  return (
    <div>
      <h1 className="font-medium pt-5 leading-tight mt-0 mb-2 text-black-600 text-center text-lg md:text-4xl">
        {year} Driver Standings
      </h1>
      <table className=" min-w-full text-xs md:text-lg">
        <thead className="bg-white border-b">
          <tr>
            <th
              className="font-medium text-gray-900 px-6 py-4 text-left"
              scope="col"
            >
              Pos
            </th>
            <th
              scope="col"
              className="font-medium text-gray-900 px-6 py-4 text-left"
            >
              Driver
            </th>
            <th
              scope="col"
              className="font-medium text-gray-900 px-6 py-4 text-left"
            >
              Nationality
            </th>
            <th
              scope="col"
              className="font-medium text-gray-900 px-6 py-4 text-left"
            >
              Car
            </th>
            <th
              scope="col"
              className="font-medium text-gray-900 px-6 py-4 text-left"
            >
              Pts
            </th>
          </tr>
        </thead>
        <tbody>
          {driverArray.map((driverInfo, index) => {
            return <DriverRow key={index} driverInfo={driverInfo} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default DriverTable;
