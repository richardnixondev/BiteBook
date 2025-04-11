import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <aside className="bg-blue-600 text-white p-6 w-48 flex flex-col space-y-6">
      <div className="flex justify-center">
        <Link to="/dashboard" className="text-xl font-semibold hover:text-gray-200">
          📊 Dash Board
        </Link>
      </div>
      <div className="flex justify-center">
        <Link to="/profile" className="text-xl font-semibold hover:text-gray-200">
          👤 Profile
        </Link>
      </div>
      <div className="flex justify-center">
        <Link to="/theme" className="text-xl font-semibold hover:text-gray-200">
          🎨 Theme
        </Link>
      </div>
    </aside>
  );
}
