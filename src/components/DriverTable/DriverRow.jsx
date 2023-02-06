function DriverRow({ driverInfo }) {
  const DriverName = `${driverInfo.Driver.givenName} ${driverInfo.Driver.familyName}`;
  return (
    <tr className="transition duration-300 ease-in-out border-b hover:bg-gray-100">
      <td className="px-6 py-4 font-light text-gray-900 whitespace-nowrap">
        {driverInfo.position}
      </td>
      <td className="px-6 py-4 font-light text-gray-900 whitespace-nowrap">
        {DriverName}
      </td>
      <td className="px-6 py-4 font-light text-gray-900 whitespace-nowrap">
        {driverInfo.Driver.nationality}
      </td>
      <td className="px-6 py-4 font-light text-gray-900 whitespace-nowrap">
        {driverInfo.Constructors[0].name}
      </td>
      <td className="px-6 py-4 font-light text-gray-900 whitespace-nowrap">
        {driverInfo.points}
      </td>
    </tr>
  );
}

export default DriverRow;
