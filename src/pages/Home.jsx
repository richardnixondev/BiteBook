import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Bite Book</h1>
      <p>Find your favorite recipe!.</p>
      <Link to="/recipes">Show Recipes</Link>
    </div>
  );
};

export default Home;
