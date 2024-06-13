const Sidebar: React.FC = () => {
  return (
    <div
      className={`flex top-0 left-0 w-[237px] bg-white z-40 shadow-lg transform transition-all duration-300`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          <ul className="mt-4 flex flex-col">
            <li className="mb-2 flex items-start">
              <a href="/" className="text-lg hover:text-blue-500">
                Buttons
              </a>
            </li>
            <li className="mb-2 flex items-start">
              <a href="/" className="text-lg hover:text-blue-500">
                Inputs
              </a>
            </li>
            <li className="mb-2 flex items-start">
              <a href="/" className="text-lg hover:text-blue-500">
                Grid
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
