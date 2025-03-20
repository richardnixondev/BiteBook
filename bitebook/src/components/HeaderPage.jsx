import logo from "../assets/logo.webp";
export function HeaderPage() {
  return (
    <div>
      <ul>
        <li className="logo-div">
          <img className="logo" src={logo} />
        </li>
      </ul>
    </div>
  );
}
