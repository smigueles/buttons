import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Buttons from "./screens/Buttons";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex-col justify-between flex">
        <Buttons />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
