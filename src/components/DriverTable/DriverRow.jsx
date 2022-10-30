const DriverRow = ({ driverInfo }) => {
  var DriverName =
    driverInfo.Driver.givenName + " " + driverInfo.Driver.familyName;
  return (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {driverInfo.position}
      </td>
      <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {DriverName}
      </td>
      <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {driverInfo.Driver.nationality}
      </td>
      <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {driverInfo.Constructors[0].name}
      </td>
      <td className="text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {driverInfo.points}
      </td>
    </tr>
  );
};

export default DriverRow;
