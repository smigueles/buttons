import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Buttons from "./screens/Buttons";

const Dashboard = () => {
  return (
    <div className="flex flex-row overflow-hidden h-full">
      <Sidebar />
      <div className="flex-col justify-between flex z-10 w-full">
        <Buttons />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
