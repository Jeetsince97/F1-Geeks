import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import DriverRow from "./DriverRow";

function DriverTable() {
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
  // eslint-disable-next-line no-console
  if (error) console.log(error);

  // create a variable year to store the year of the current season
  const year = data.MRData.StandingsTable.season;

  return (
    <div>
      <h1 className="pt-5 mt-0 mb-2 text-lg font-medium leading-tight text-center text-black-600 md:text-4xl">
        {year}
        Driver Standings
      </h1>
      <table className="min-w-full text-xs md:text-lg">
        <thead className="bg-white border-b">
          <tr>
            <th
              className="px-6 py-4 font-medium text-left text-gray-900"
              scope="col"
            >
              Pos
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-left text-gray-900"
            >
              Driver
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-left text-gray-900"
            >
              Nationality
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-left text-gray-900"
            >
              Car
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-left text-gray-900"
            >
              Pts
            </th>
          </tr>
        </thead>
        <tbody>
          {driverArray.map((driverInfo, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <DriverRow key={index} driverInfo={driverInfo} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DriverTable;
