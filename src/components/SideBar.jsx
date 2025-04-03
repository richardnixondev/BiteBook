import { Link } from "react-router-dom";
export function SideBar() {
  return (
    <aside>
      <ul className="sidebar">
        <li className="DashBoard">
          <Link to="/dashboard">📊 Dash Board</Link>
        </li>
        <li className="profile">
          <Link to="/profile"> 👤Profile</Link>
        </li>
        {/* <li className="filter">
          <Link to="/filter"> 🔽 Filter</Link>
        </li> */}
        {/* <li className="settings">
          <Link to="/settings"> ⚙️Settings</Link>
        </li> */}
        <li className="theme">
          <Link to="/theme">🎨 Theme</Link>
        </li>
      </ul>
    </aside>
  );
}
