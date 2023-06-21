import { Link, useParams } from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

export function Product() {
  let { id } = useParams();

    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Product page {id}
        </p>
        <Link to="/profile">Go to profile</Link>
      </header>
    </div>
    )
  }