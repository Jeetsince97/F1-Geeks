import { useState, useEffect } from "react";
import Team from "../Team";
import useFetch from "../../hooks/useFetch";

function TeamTable() {
  const { data, loading, error } = useFetch(
    "http://ergast.com/api/f1/current/constructorStandings.json"
  );
  const [constructorArray, setConstructorArray] = useState([]);

  useEffect(() => {
    if (data != null && !error) {
      setConstructorArray(
        data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      );
    }
  }, [data, loading, error]);
  if (loading) return <h1>Loading......</h1>;
  // eslint-disable-next-line no-console
  if (error) console.log(error);

  // create a variable to store the year of the current season
  const year = data.MRData.StandingsTable.season;

  return (
    <div>
      <h1 className="pt-5 mt-0 mb-2 text-lg font-medium leading-tight text-center text-black-600 md:text-4xl">
        {year} Constructor Standings
      </h1>
      <table className="min-w-full text-xs md:text-lg">
        <thead className="bg-white border-b">
          <tr>
            <th
              className="px-6 py-4 font-medium text-left text-gray-900 "
              scope="col"
            >
              Pos
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-left text-gray-900"
            >
              Team
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-left text-gray-900"
            >
              Points
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-left text-gray-900"
            >
              Wins
            </th>
          </tr>
        </thead>
        <tbody>
          {constructorArray.map((team, index) => {
            // eslint-disable-next-line react/no-array-index-key
            return <Team key={index} team={team} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TeamTable;
