import TeamTable from "./components/TeamStandingtable";
import DriverTable from "./components/DriverTable";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="w-full ">
      <NavBar />
      <TeamTable />
      <DriverTable />
    </div>
  );
}

export default App;
