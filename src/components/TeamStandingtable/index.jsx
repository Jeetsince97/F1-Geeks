import React, { useState, useEffect } from "react";
import Team from "../Team";
import useFetch from "../../hooks/useFetch";

const TeamTable = () => {
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
  if (error) console.log(error);

  //create a variable to store the year of the current season
  const year = data.MRData.StandingsTable.season;

  return (
    <div>
      <h1 className="font-medium pt-5 leading-tight mt-0 mb-2 text-black-600 text-center text-lg md:text-4xl">
        {year} Constructor Standings
      </h1>
      <table className=" min-w-full text-xs md:text-lg">
        <thead className="bg-white border-b">
          <tr>
            <th
              className="font-medium text-gray-900 px-6 py-4 text-left "
              scope="col"
            >
              Pos
            </th>
            <th
              scope="col"
              className="font-medium text-gray-900 px-6 py-4 text-left"
            >
              Team
            </th>
            <th
              scope="col"
              className="font-medium text-gray-900 px-6 py-4 text-left"
            >
              Points
            </th>
            <th
              scope="col"
              className="font-medium text-gray-900 px-6 py-4 text-left"
            >
              Wins
            </th>
          </tr>
        </thead>
        <tbody>
          {constructorArray.map((team, index) => {
            return <Team key={index} team={team} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TeamTable;
