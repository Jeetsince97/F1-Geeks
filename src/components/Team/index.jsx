function Team({ team }) {
  // this util function returns the avg grade of the student

  return (
    <tr className="transition duration-300 ease-in-out border-b hover:bg-gray-100">
      <td className="px-6 py-4 font-light text-gray-900 whitespace-nowrap">
        {team.position}
      </td>
      <td className="px-6 py-4 font-light text-gray-900 whitespace-nowrap">
        {team.Constructor.name}
      </td>
      <td className="px-6 py-4 font-light text-gray-900 whitespace-nowrap">
        {team.points}
      </td>
      <td className="px-6 py-4 font-light text-gray-900 whitespace-nowrap">
        {team.wins}
      </td>
    </tr>
  );
}

export default Team;
