import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-900 text-white p-4 flex justify-around">
      <Link to="/" className="hover:text-yellow-400">
        Home
      </Link>
      <Link to="/map" className="hover:text-yellow-400">
        Map
      </Link>
      <Link to="/stories" className="hover:text-yellow-400">
        Stories
      </Link>
      <Link to="/community" className="hover:text-yellow-400">
        Community
      </Link>
      <Link to="/challenges" className="hover:text-yellow-400">
        Challenges
      </Link>
      <Link to="/reels" className="hover:text-yellow-400">
        Reels
      </Link>
    </nav>
  );
}
