const Team = ({ team }) => {
  //this util function returns the avg grade of the student

  return (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {team.position}
      </td>
      <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {team.Constructor.name}
      </td>
      <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {team.points}
      </td>
      <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {team.wins}
      </td>
    </tr>
  );
};

export default Team;
