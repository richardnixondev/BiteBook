import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";
import { HeaderPage } from "./components/HeaderPage";
import { FooterPage } from "./components/FooterPage";
import "./App.css";
function App() {
  return (
    <>
      <HeaderPage />
      <div className="header">
        <NavBar />
        <div>
          <SideBar />
          <div className="content">
            <h1>Welcome to the Recipe App</h1>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default App;
