import { Link } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

export function Profile() {
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Profile page
        </p>
        <Link to="/">Go to home</Link>
        <Link to="/product/1">Product 1</Link>
        <Link to="/product/2">Product 2</Link>
      </header>
    </div>
    )
  }