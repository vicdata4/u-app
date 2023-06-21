import { Link } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

export function Home() {
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home page
        </p>
        <Link to="profile">Go to profile</Link>
      </header>
    </div>
    )
  }